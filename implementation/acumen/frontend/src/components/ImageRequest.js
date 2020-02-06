import React, { useState } from "react";
import axios from "axios";

import { API_URL } from "..";

export const ImageRequest = () => {
  const [results, setResults] = useState([]);
  const [files, setFiles] = useState([]);
  const [requests, setRequests] = useState(1);
  const [message, setMessage] = useState("");
  const [processing, setProcessing] = useState(false);

  const sendSingleRequest = (start, number, formData) => {
    return axios
      .post(`${API_URL}/image`, formData)
      .then(response => response.data)
      .then(detections => {
        const timeTaken = Math.round((Date.now() - start) / 10) / 100;
        return { number, timeTaken, detections };
      })
      .catch(error => {
        return { number, error: error.message };
      });
  };
  const start = () => {
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
    const promises = [];
    for (let i = 1; i <= requests; i++) {
      promises.push(sendSingleRequest(Date.now(), i, formData));
    }
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
      <h2>Send Requests</h2>
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
              src="http://localhost:5000/image"
              alt="Prediction"
              style={{ width: "100%" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
