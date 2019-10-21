import pandas as pd
import numpy as np
from sklearn.metrics import mean_squared_error
import os
import time
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from keras.models import Sequential, load_model
from keras.layers import Dense, Dropout, LSTM
from keras import optimizers
from keras.callbacks import CSVLogger
from tqdm import tqdm_notebook

iter_changes = "dropout_layers_0.4_0.4"
params = {
    "batch_size": 20,  # 20<16<10, 25 was a bust
    "epochs": 5,
    "lr": 0.00010000,
    "time_steps": 90
}
TIME_STEPS = params["time_steps"]
BATCH_SIZE = params["batch_size"]
stime = time.time()

def build_timeseries(mat, y_col_index):
    # y_col_index is the index of column that would act as output column
    # total number of time-series samples would be len(mat) - TIME_STEPS
    dim_0 = mat.shape[0] - params["time_steps"]
    dim_1 = mat.shape[1]
    x = np.zeros((dim_0, params["time_steps"], dim_1))
    y = np.zeros((dim_0,))
    
    for i in tqdm_notebook(range(dim_0)):
        x[i] = mat[i:params["time_steps"]+i]
        y[i] = mat[params["time_steps"]+i, y_col_index]
    print("length of time-series i/o",x.shape,y.shape)
    return x, y

def trim_dataset(mat, batch_size):
    """
    trims dataset to a size that's divisible by BATCH_SIZE
    """
    no_of_rows_drop = mat.shape[0]%batch_size
    if(no_of_rows_drop > 0):
        return mat[:-no_of_rows_drop]
    else:
        return mat

def print_time(text, stime):
    seconds = (time.time()-stime)
    print(text, seconds//60,"minutes : ",np.round(seconds%60),"seconds")

class Stock:
    def __init__(self, symbol):
        self.symbol = symbol
        df = pd.read_csv("../data/KaggleNYStockExchange/prices-split-adjusted.csv")
        self.history = df[df.symbol == self.symbol].sort_values("date")
    
    def get_history_dict(self):
        return self.history.to_dict(orient="records")
    
    def predict(self):
        train_cols = ["open","high","low","close","volume"]
        df_train, df_test = train_test_split(self.history, train_size=0.8, test_size=0.2, shuffle=False)
        print("Train and Test size", len(df_train), len(df_test))
        # scale the feature MinMax, build array
        x = df_train.loc[:,train_cols].values
        min_max_scaler = MinMaxScaler()
        x_train = min_max_scaler.fit_transform(x)
        x_test = min_max_scaler.transform(df_test.loc[:,train_cols])

        x_t, y_t = build_timeseries(x_train, 3)
        x_t = trim_dataset(x_t, params["batch_size"])
        y_t = trim_dataset(y_t, params["batch_size"])
        x_temp, y_temp = build_timeseries(x_test, 3)
        x_val, x_test_t = np.split(trim_dataset(x_temp, params["batch_size"]),2)
        y_val, y_test_t = np.split(trim_dataset(y_temp, params["batch_size"]),2)

        lstm_model = Sequential()
        lstm_model.add(LSTM(100, batch_input_shape=(params["batch_size"], params["time_steps"], x_t.shape[2]), dropout=0.0, recurrent_dropout=0.0, stateful=True,     kernel_initializer='random_uniform'))
        lstm_model.add(Dropout(0.5))
        lstm_model.add(Dense(20,activation='relu'))
        lstm_model.add(Dense(1,activation='sigmoid'))
        optimizer = optimizers.RMSprop(lr=params["lr"])
        lstm_model.compile(loss='mean_squared_error', optimizer=optimizer)

        history = lstm_model.fit(x_t, y_t, epochs=params["epochs"], verbose=2, batch_size=params["batch_size"],
                    shuffle=False, validation_data=(trim_dataset(x_val, params["batch_size"]),
                    trim_dataset(y_val, params["batch_size"])))
        
        # model.evaluate(x_test_t, y_test_t, batch_size=BATCH_SIZE
        y_pred = lstm_model.predict(trim_dataset(x_test_t, BATCH_SIZE), batch_size=BATCH_SIZE)
        y_pred = y_pred.flatten()
        y_test_t = trim_dataset(y_test_t, BATCH_SIZE)
        error = mean_squared_error(y_test_t, y_pred)
        print("Error is", error, y_pred.shape, y_test_t.shape)
        return y_pred[0:15]
        print(y_test_t[0:15])

        # convert the predicted value to range of real data
        y_pred_org = (y_pred * min_max_scaler.data_range_[3]) + min_max_scaler.data_min_[3]
        # min_max_scaler.inverse_transform(y_pred)
        y_test_t_org = (y_test_t * min_max_scaler.data_range_[3]) + min_max_scaler.data_min_[3]
        # min_max_scaler.inverse_transform(y_test_t)
        print(y_pred_org[0:15])
        print(y_test_t_org[0:15])

        # Visualize the training data
        from matplotlib import pyplot as plt
        plt.figure()
        plt.plot(history.history['loss'])
        plt.plot(history.history['val_loss'])
        plt.title('Model loss')
        plt.ylabel('Loss')
        plt.xlabel('Epoch')
        plt.legend(['Train', 'Test'], loc='upper left')
        #plt.show()
        plt.savefig(os.path.join(OUTPUT_PATH, 'train_vis_BS_'+str(BATCH_SIZE)+"_"+time.ctime()+'.png'))

        # load the saved best model from above
        # saved_model = load_model(os.path.join(OUTPUT_PATH, 'best_model.h5')) # , "lstm_best_7-3-19_12AM",
        saved_model = lstm_model
        print(saved_model)

        y_pred = saved_model.predict(trim_dataset(x_test_t, BATCH_SIZE), batch_size=BATCH_SIZE)
        y_pred = y_pred.flatten()
        y_test_t = trim_dataset(y_test_t, BATCH_SIZE)
        error = mean_squared_error(y_test_t, y_pred)
        print("Error is", error, y_pred.shape, y_test_t.shape)
        print(y_pred[0:15])
        print(y_test_t[0:15])
        y_pred_org = (y_pred * min_max_scaler.data_range_[3]) + min_max_scaler.data_min_[3] # min_max_scaler.inverse_transform(y_pred)
        y_test_t_org = (y_test_t * min_max_scaler.data_range_[3]) + min_max_scaler.data_min_[3] # min_max_scaler.inverse_transform(y_test_t)
        print(y_pred_org[0:15])
        print(y_test_t_org[0:15])

        # Visualize the prediction
        from matplotlib import pyplot as plt
        plt.figure()
        plt.plot(y_pred_org)
        plt.plot(y_test_t_org)
        plt.title('Prediction vs Real Stock Price')
        plt.ylabel('Price')
        plt.xlabel('Days')
        plt.legend(['Prediction', 'Real'], loc='upper left')
        #plt.show()
        plt.savefig(os.path.join(OUTPUT_PATH, 'pred_vs_real_BS'+str(BATCH_SIZE)+"_"+time.ctime()+'.png'))
        print_time("program completed ", stime)