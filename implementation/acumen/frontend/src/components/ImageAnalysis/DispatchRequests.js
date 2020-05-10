import React, { useState } from "react";
import axios from "axios";

import { API_URL } from "../..";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

export const DispatchRequests = ({ setResults, processing, setProcessing }) => {
  const [files, setFiles] = useState([]);
  const [requests, setRequests] = useState(1);
  const [message, setMessage] = useState("");

  const sendSingleRequest = (start, number, formData) => {
    return axios
      .post(`${API_URL}/yolo`, formData)
      .then((response) => response.data)
      .then((results) => {
        const timeTaken = Math.round((Date.now() - start) / 10) / 100;
        return { number, timeTaken, results };
      })
      .catch((error) => {
        return { number, error: error.message };
      });
  };
  const start = () => {
    if (files.length < 1) {
      setMessage("At least one file needed");
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
      .then((response) => {
        setResults(response);
        setProcessing(false);
        setMessage(`Done with ${requests} requests`);
      })
      .catch((error) => {
        setProcessing(false);
        setMessage("Error");
      });
  };
  return (
    <Card>
      <Card.Header as="h5">Send Requests</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="4">
              File:
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="file"
                disabled={processing}
                onChange={(e) => setFiles(Array.from(e.target.files))}
                multiple
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="4">
              Concurrent Requests:
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="number"
                value={requests}
                disabled={processing}
                onChange={(e) => setRequests(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Button onClick={start} variant="primary" disabled={processing}>
            Start
          </Button>
          <p>{message}</p>
        </Form>
      </Card.Body>
    </Card>
  );
};
