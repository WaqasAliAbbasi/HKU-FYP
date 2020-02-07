import React, { useState } from "react";
import { ImageRequest } from "./ImageRequest";
import { ImageServices } from "./ImageServices";
import { Container, Row, Col } from "react-bootstrap";
import { ImageData } from "./ImageData";

export const Image = () => {
  const [results, setResults] = useState([]);
  const [processing, setProcessing] = useState(false);
  return (
    <Container fluid>
      <Row>
        <Col>
          <ImageServices />
        </Col>
        <Col>
          <ImageRequest
            setResults={setResults}
            processing={processing}
            setProcessing={setProcessing}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <Col>
          <ImageData results={results} processing={processing} />
        </Col>
      </Row>
    </Container>
  );
};
