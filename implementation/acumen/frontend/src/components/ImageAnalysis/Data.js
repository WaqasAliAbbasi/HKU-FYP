import React from "react";
import { Table } from "react-bootstrap";

export const Data = ({ results }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Table striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Time Taken (s)</th>
            <th>Result</th>
            <th>Processed Image</th>
          </tr>
        </thead>
        <tbody>
          {results
            .sort((a, b) => a.number - b.number)
            .map(({ error, number, timeTaken, results }) => {
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
                  <td>{JSON.stringify(results)}</td>
                  <td>
                    {results.map(({ id, port }) => (
                      <img
                        src={`http://localhost:5000/yolo/${port}/${id}`}
                        alt={id}
                        style={{ width: 150 }}
                      />
                    ))}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};
