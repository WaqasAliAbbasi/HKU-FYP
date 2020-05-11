import requests
import pathlib
import os
import shutil 
import csv

yolo_services_endpoint = "http://localhost:5000/yolo_services"
requests.get("{}/reset".format(yolo_services_endpoint))

payload = "<file contents here>"
headers = {
  'Content-Type': 'text/plain'
}

response = requests.request("GET", yolo_services_endpoint, headers=headers, data = payload)

yolo_services = response.json()

alpr_services_endpoint = "http://localhost:5000/alpr_services"
requests.get("{}/reset".format(alpr_services_endpoint))

payload = "<file contents here>"
headers = {
  'Content-Type': 'text/plain'
}

response = requests.request("GET", alpr_services_endpoint, headers=headers, data = payload)

alpr_services = response.json()

minimum_services = min(len(alpr_services),len(yolo_services))
experiment_data = []
dir_path = os.path.dirname(os.path.realpath(__file__))
for time_threshold in [2000]:
    for batch_process in range(1,6,2):
        for i in range(1,minimum_services+1):
            def modify_batch(setting):
                setting["batchSize"] = batch_process
                setting["timeThreshold"] = time_threshold
                return setting
            yolo_setting = [modify_batch(i) for i in yolo_services[:i]]
            requests.post(yolo_services_endpoint,json=yolo_setting)
            alpr_setting = [modify_batch(i) for i in alpr_services[:i]]
            requests.post(alpr_services_endpoint,json=alpr_setting)
            current_setting = "{}-services-batch-{}-time-{}".format(i,batch_process,time_threshold)
            current_setting_path = "{}/{}".format(dir_path,current_setting)
            jmeter_file = os.path.join(dir_path,"testplan.jmx")
            csv_file = os.path.join(current_setting_path,"raw.csv")
            summary = os.path.join(current_setting_path,"summary")
            if not os.path.isdir(current_setting_path):
                pathlib.Path(current_setting_path).mkdir(parents=True, exist_ok=True)
                print("Experiment: {}...".format(current_setting))
                command = "jmeter -n -t {} -l {} -e -o {}".format(jmeter_file,csv_file,summary)
                os.system(command)
            if os.path.exists(csv_file):
                elapsed_times = []
                latencies = []
                with open(csv_file, newline='') as csvfile:
                    spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
                    i = 0
                    for row in spamreader:
                        if i == 0:
                            i+=1
                            continue
                        if row[3] != "200":
                            continue
                        elapsed = int(row[0])
                        latency = int(row[1])/1000
                        
                        elapsed_times.append(elapsed)
                        latencies.append(latency)
                experiment_data.append((current_setting,zip(elapsed_times,latencies)))
experiment_data = sorted(experiment_data,key=lambda x: x[0])
experiment_data_list = [sorted(list(i),key=lambda x:x[0]) for _,i in experiment_data]

def save_to_csv(data, file_name, x_axis_label):
    max_length = max([len(i) for i in data])
    flatten = lambda l: [item for sublist in l for item in sublist]
    experiment_data_combined = [ flatten([data[column][i] if i < len(data[column]) else ["",""] for column in range(len(experiment_data))])  for i in range(max_length)]

    experiment_data_json = {}
    for i in experiment_data_combined:
        for setting in range(0,len(i),2):
            if i[setting] == '':
                continue
            time = i[setting]
            latency = i[setting+1]
            if not time in experiment_data_json:
                experiment_data_json[time] = {}
                for setting_name,_ in experiment_data:
                    experiment_data_json[time][setting_name] = []
            experiment_data_json[time][experiment_data[int(setting / 2)][0]].append(latency)

    f = open(os.path.join(dir_path,file_name), 'w')
    with f:
        writer = csv.writer(f)
        writer.writerow([x_axis_label]+[setting.replace("services","instances-per-model") for setting,_ in experiment_data])
        for key,row in sorted(experiment_data_json.items(),key=lambda x:x[0]):
            writer.writerow([key]+[sum(l)/len(l) if len(l) != 0 else "" for l in list(row.values())])

def adjust_by_concurrency(data):
    start = data[0][0] - data[0][1]*1000
    first = data[0][1]
    ramp_up = 20000
    def get_threads(time):
        return 2 ** int(time/ramp_up)
    new_data = [[get_threads(data[0][0]-start),first]]
    for time,item in data[1:]:
        new_data.append([get_threads(time-start),item])
    return new_data
by_concurrency = [adjust_by_concurrency(i) for i in experiment_data_list]
save_to_csv(by_concurrency,"by_concurrency.csv","Concurrent Requests")

def adjust_by_elapsed_time(data):
    start = data[0][0] - data[0][1]*1000
    first = data[0][1]
    new_data = [[data[0][0]-start,first]]
    for time,item in data[1:]:
        new_data.append([time-start,item])
    return new_data
by_elapsed_time = [adjust_by_elapsed_time(i) for i in experiment_data_list]
save_to_csv(by_elapsed_time,"by_elapsed_time.csv","Elapsed Time")