import React, { useState, useEffect } from "react";
import axios from "axios";

import { Form, Button, ButtonToolbar, Row, Col, Card } from "react-bootstrap";

export const BatchControl = ({ serviceEndpoint }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get(serviceEndpoint)
      .then((response) => response.data)
      .then((services) =>
        setServices(
          services
            .map((service) => ({ ...service, checked: true }))
            .sort((a, b) => a.port - b.port)
        )
      );
  }, [serviceEndpoint]);

  const resetServices = () => {
    axios
      .get(`${serviceEndpoint}/reset`)
      .then((response) => response.data)
      .then((services) => {
        setServices(
          services
            .map((service) => ({ ...service, checked: true }))
            .sort((a, b) => a.port - b.port)
        );
      });
  };

  const updateServices = () => {
    axios
      .post(
        serviceEndpoint,
        services.filter(({ checked }) => checked)
      )
      .then((response) => response.data)
      .then((updatedServices) => {
        const absent = services
          .filter(
            ({ port }) =>
              !updatedServices.map(({ port }) => port).includes(port)
          )
          .map((service) => ({ ...service, checked: false }));
        setServices(
          [
            ...absent,
            ...updatedServices.map((service) => ({
              ...service,
              checked: true,
            })),
          ].sort((a, b) => a.port - b.port)
        );
      });
  };
  return (
    <Card.Body>
      <Form>
        {services.map(({ name, port, batchSize, timeThreshold, checked }) => (
          <Row key={port}>
            <Col sm={4}>
              <Form.Check
                key={`${checked}${port}`}
                type={"checkbox"}
                id={name}
                label={name}
                checked={checked}
                onChange={({ target }) => {
                  const currentServices = services.filter(
                    (service) => service.name !== name
                  );
                  currentServices.push({
                    name,
                    port,
                    checked: target.checked,
                  });
                  setServices(currentServices.sort((a, b) => a.port - b.port));
                }}
              />
            </Col>
            <Col sm={4}>
              <Form.Group as={Row}>
                <Form.Label size="sm" column sm="6" style={{ padding: 2 }}>
                  Batch Size
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    size="sm"
                    type="number"
                    value={batchSize}
                    onChange={({ target }) => {
                      const currentServices = services.filter(
                        (service) => service.name !== name
                      );
                      currentServices.push({
                        name,
                        port,
                        batchSize: parseInt(target.value),
                        timeThreshold,
                        checked,
                      });
                      setServices(
                        currentServices.sort((a, b) => a.port - b.port)
                      );
                    }}
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group as={Row}>
                <Form.Label size="sm" column sm="6" style={{ padding: 2 }}>
                  Wait (ms)
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    type="number"
                    size="sm"
                    value={timeThreshold}
                    onChange={({ target }) => {
                      const currentServices = services.filter(
                        (service) => service.name !== name
                      );
                      currentServices.push({
                        name,
                        port,
                        batchSize,
                        timeThreshold: parseInt(target.value),
                        checked,
                      });
                      setServices(
                        currentServices.sort((a, b) => a.port - b.port)
                      );
                    }}
                  />
                </Col>
              </Form.Group>
            </Col>
          </Row>
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
  );
};
