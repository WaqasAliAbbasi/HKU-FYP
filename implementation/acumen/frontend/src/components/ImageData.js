import React from "react";
import { Table } from "react-bootstrap";

export const ImageData = ({ results, processing }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "80%" }}>
        <Table striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Time Taken (s)</th>
              <th>Detections</th>
            </tr>
          </thead>
          <tbody>
            {results
              .sort((a, b) => a.number - b.number)
              .map(({ error, number, timeTaken, detections }) => {
                if (error) {
                  return (
                    <tr key={number}>
                      <td>{number}</td>
                      <td colSpan="2">{error}</td>
                    </tr>
                  );
                }
                return (
                  <tr key={number}>
                    <td>{number}</td>
                    <td>{timeTaken}</td>
                    <td>{JSON.stringify(detections)}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
      <div style={{ padding: 20, width: "20%" }}>
        {!processing && (
          <img
            src="http://localhost:5000/yolo"
            alt="Prediction"
            style={{ width: "100%" }}
          />
        )}
      </div>
    </div>
  );
};
