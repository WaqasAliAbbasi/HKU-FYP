import React from "react";
import { Accordion, Card, Tabs, Tab } from "react-bootstrap";

import CurrentImageService from "./CurrentImageService.png";
import { BatchControl } from "./BatchControl";
import { API_URL } from "../..";

export const ResourceDistribution = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as="div" eventKey="0">
            <h5 style={{ margin: 0 }}>Resource Distribution</h5>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <img
              src={CurrentImageService}
              width={300}
              alt="Analysis Pipeline"
              style={{ display: "flex", margin: "auto" }}
            />
            <Tabs defaultActiveKey="yolo">
              <Tab eventKey="yolo" title="C2: YOLOv3">
                <BatchControl serviceEndpoint={`${API_URL}/yolo_services`} />
              </Tab>
              <Tab eventKey="alpr" title="C4: ALPR">
                <BatchControl serviceEndpoint={`${API_URL}/alpr_services`} />
              </Tab>
            </Tabs>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};
