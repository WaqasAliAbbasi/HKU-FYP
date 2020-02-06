import React, { useState } from "react";

const API_URL = "http://localhost:5000";
export const Image = () => {
  const [results, setResults] = useState([]);
  const [files, setFiles] = useState([]);
  const [requests, setRequests] = useState(1);
  const [message, setMessage] = useState("");
  const [processing, setProcessing] = useState(false);
  const sendSingleRequest = (start, number, formData) => {
    return fetch(`${API_URL}/upload`, {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(detections => {
        const timeTaken = Math.round((Date.now() - start) / 10) / 100;
        return { number, timeTaken, detections };
      })
      .catch(error => {
        return { number, error: error.message };
      });
  };
  const start = e => {
    if (files.length !== 1) {
      setMessage("One file needed");
      return;
    }
    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    setMessage("Processing...");
    setProcessing(true);
    const promises = Array.from({ length: requests }, (v, k) => k + 1).map(
      number => {
        const start = Date.now();
        return sendSingleRequest(start, number, formData);
      }
    );
    Promise.all(promises)
      .then(response => {
        setResults(response);
        setProcessing(false);
        setMessage(`Done with ${requests} requests`);
      })
      .catch(error => {
        setProcessing(false);
        setMessage("Error");
      });
  };
  return (
    <div>
      <h1>Image Pipeline</h1>
      <div>
        <input
          type="file"
          disabled={processing}
          onChange={e => setFiles(Array.from(e.target.files))}
        />
        Concurrent Requests:
        <input
          type="number"
          value={requests}
          disabled={processing}
          onChange={e => setRequests(e.target.value)}
        />
        <br />
        <input
          type="submit"
          value="Start"
          onClick={start}
          disabled={processing}
        />
        <p>{message}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "60%" }}>
          {results
            .sort((a, b) => a.number - b.number)
            .map(({ error, number, timeTaken, detections }, index) => {
              if (error) {
                return (
                  <div key={index}>
                    <div>Error: {error}</div>
                    <hr />
                  </div>
                );
              }
              return (
                <div key={index}>
                  <div>
                    <p>Number: {number}</p>
                    <p>Time Taken: {timeTaken}</p>
                    <p>{JSON.stringify(detections)}</p>
                  </div>
                  <hr />
                </div>
              );
            })}
        </div>
        <div style={{ padding: 20, width: "20%" }}>
          {!processing && message.includes("Done") && (
            <img
              src="http://localhost:5000/upload"
              alt="Prediction"
              style={{ width: "100%" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
