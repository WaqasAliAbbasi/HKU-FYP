import React, { useState } from "react";
import { DispatchRequests } from "./DispatchRequests";
import { ResourceDistribution } from "./ResourceDistribution";
import { Container, Row, Col } from "react-bootstrap";
import { Data } from "./Data";

export const ImageAnalysis = () => {
  const [results, setResults] = useState([]);
  const [processing, setProcessing] = useState(false);
  return (
    <Container fluid>
      <Row>
        <Col>
          <ResourceDistribution />
        </Col>
        <Col>
          <DispatchRequests
            setResults={setResults}
            processing={processing}
            setProcessing={setProcessing}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <Col>
          <Data results={results} />
        </Col>
      </Row>
    </Container>
  );
};
