import React, { useState } from "react";

const API_URL = "http://localhost:5000";
export const Image = () => {
  const [uploading, setUploading] = useState(false);
  const [predictionStatus, setPredictionStatus] = useState(
    "(upload using the file selection below)"
  );
  const [detections, setDetections] = useState({});
  const onChange = e => {
    const files = Array.from(e.target.files);
    setUploading(true);

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    const start = Date.now();
    setPredictionStatus("Processing...");
    fetch(`${API_URL}/upload`, {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(response => {
        const timeTaken = Math.round((Date.now() - start) / 10) / 100;
        setDetections(response);
        setPredictionStatus(`Took ${timeTaken} s`);
        setUploading(false);
      });
  };
  return (
    <div>
      <h1>YOLO v3</h1>
      <div>
        <b>Status:</b> {predictionStatus}
      </div>
      <br />
      <div>
        <input type="file" onChange={onChange} disabled={uploading} />
      </div>
      <br />
      {!uploading && <div>{JSON.stringify(detections)}</div>}
      {!uploading && (
        <img
          src="http://localhost:5000/upload"
          alt="Prediction"
          style={{ height: 400 }}
        />
      )}
    </div>
  );
};
