import React, { useState } from "react";
import axios from "axios";
import { Column, Table } from "react-virtualized";
import "react-virtualized/styles.css";

function App() {
  const [stockSymbol, setStockSymbol] = useState("AAPL");
  const [predictionStatus, setPredictionStatus] = useState("");
  const [stockHistory, setStockHistory] = useState([]);
  const [stockPrediction, setStockPrediction] = useState([]);
  const fetchStockData = async event => {
    event.preventDefault();
    setStockHistory([]);
    axios.get(`http://127.0.0.1:5000/stock/${stockSymbol}`).then(({ data }) => {
      setStockHistory(data);
    });
    setStockPrediction([]);
    setPredictionStatus(`Predicting for ${stockSymbol}...`);
    const start = Date.now();
    axios
      .get(`http://127.0.0.1:5000/stock/${stockSymbol}/predict`)
      .then(({ data }) => {
        setStockPrediction(data);
        const timeTaken = Math.round((Date.now() - start)/10) / 100
        setPredictionStatus(`Took ${timeTaken} s`);
      });
  };
  return (
    <div>
      <form onSubmit={fetchStockData}>
        <label>
          Stock Symbol:
          <input
            type="text"
            value={stockSymbol}
            onChange={event => setStockSymbol(event.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {stockHistory.length > 0 && <h1>Stock History</h1>}
      {stockHistory.length > 0 && (
        <Table
          height={400}
          width={1000}
          headerHeight={20}
          rowHeight={20}
          rowCount={stockHistory.length}
          rowGetter={({ index }) => stockHistory[index]}
        >
          <Column label="Date" dataKey="date" />
          <Column label="Open" dataKey="open" />
          <Column label="High" dataKey="high" />
          <Column label="Low" dataKey="low" />
          <Column label="Close" dataKey="close" />
          <Column label="Volume" dataKey="volume" />
        </Table>
      )}
      {(predictionStatus || stockPrediction.length > 0) && (
        <h1>
          Stock Price Prediction {predictionStatus && `(${predictionStatus})`}
        </h1>
      )}
      {stockPrediction.length > 0 && (
        <p style={{ wordBreak: "break-all" }}>
          {JSON.stringify(stockPrediction)}
        </p>
      )}
    </div>
  );
}

export default App;
