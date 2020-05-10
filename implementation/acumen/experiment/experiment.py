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
for batch_process in range(1,6,2):
    for i in range(1,minimum_services+1):
        def modify_batch(setting):
            setting["batchSize"] = batch_process
            return setting
        yolo_setting = [modify_batch(i) for i in yolo_services[:i]]
        requests.post(yolo_services_endpoint,json=yolo_setting)
        alpr_setting = [modify_batch(i) for i in alpr_services[:i]]
        requests.post(alpr_services_endpoint,json=alpr_setting)
        current_setting = "{}-services-batchprocess-{}".format(i,batch_process)
        current_setting_path = "{}/{}".format(dir_path,current_setting)
        jmeter_file = os.path.join(dir_path,"testplan.jmx")
        csv_file = os.path.join(current_setting_path,"raw.csv")
        summary = os.path.join(current_setting_path,"summary")
        if not os.path.isdir(current_setting_path):
            pathlib.Path(current_setting_path).mkdir(parents=True, exist_ok=True)
            command = "jmeter -n -t {} -l {} -e -o {}".format(jmeter_file,csv_file,summary)
            os.system(command)
        if os.path.exists(csv_file):
            elapsed_times = []
            averages = []
            elapsed_start = None
            with open(csv_file, newline='') as csvfile:
                spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
                i = 0
                for row in spamreader:
                    if i == 0:
                        i+=1
                        continue
                    elapsed = int(row[0])
                    latency = int(row[1])
                    
                    if elapsed_start is None:
                        elapsed_start = elapsed
                    
                    elapsed_times.append(elapsed-elapsed_start)
                    if len(averages) == 0:
                        averages.append(latency)
                    else:
                        averages.append((averages[-1]*len(averages) + latency)/(len(averages)+1))
            experiment_data.append((current_setting,zip(elapsed_times,averages)))
experiment_data = sorted(experiment_data,key=lambda x: x[0])
experiment_data_list = [sorted(list(i),key=lambda x:x[0]) for _,i in experiment_data]
max_length = max([len(i) for i in experiment_data_list])
flatten = lambda l: [item for sublist in l for item in sublist]
experiment_data_combined = [ flatten([experiment_data_list[column][i] if i < len(experiment_data_list[column]) else ["",""] for column in range(len(experiment_data))])  for i in range(max_length)]

f = open(os.path.join(dir_path,'combined.csv'), 'w')
with f:
    writer = csv.writer(f)
    writer.writerow(flatten([["elapsed",setting] for setting,_ in experiment_data]))
    for row in experiment_data_combined:
        writer.writerow(row)
    