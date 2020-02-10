import React, { useState, useEffect } from "react";
import axios from "axios";

import { API_URL } from "..";
import { Card, Form, Button, ButtonToolbar } from "react-bootstrap";

export const ImageServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/yolo_services`)
      .then(response => response.data)
      .then(services =>
        setServices(
          services
            .map(service => ({ ...service, checked: true }))
            .sort((a, b) => a.port - b.port)
        )
      );
  }, []);

  const resetServices = () => {
    axios
      .get(`${API_URL}/yolo_services/reset`)
      .then(response => response.data)
      .then(services => {
        setServices(
          services
            .map(service => ({ ...service, checked: true }))
            .sort((a, b) => a.port - b.port)
        );
      });
  };

  const updateServices = () => {
    axios
      .post(
        `${API_URL}/yolo_services`,
        services.filter(({ checked }) => checked)
      )
      .then(response => response.data)
      .then(updatedServices => {
        const absent = services
          .filter(
            ({ port }) =>
              !updatedServices.map(({ port }) => port).includes(port)
          )
          .map(service => ({ ...service, checked: false }));
        setServices(
          [
            ...absent,
            ...updatedServices.map(service => ({ ...service, checked: true }))
          ].sort((a, b) => a.port - b.port)
        );
      });
  };
  return (
    <Card>
      <Card.Header as="h5">Hardware in Use</Card.Header>
      <Card.Body>
        <Form>
          {services.map(({ name, port, checked }) => (
            <Form.Check
              key={`${checked}${port}`}
              type={"checkbox"}
              id={name}
              label={name}
              checked={checked}
              onChange={({ target }) => {
                const currentServices = services.filter(
                  service => service.name !== name
                );
                currentServices.push({ name, port, checked: target.checked });
                setServices(currentServices.sort((a, b) => a.port - b.port));
              }}
            />
          ))}
        </Form>
        <ButtonToolbar style={{ marginTop: 5 }}>
          <Button variant="secondary" onClick={resetServices}>
            Reset
          </Button>
          <Button
            onClick={updateServices}
            variant="primary"
            style={{ marginLeft: 5 }}
          >
            Update
          </Button>
        </ButtonToolbar>
      </Card.Body>
    </Card>
  );
};
