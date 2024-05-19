import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function NotFoundPage() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>404 - Page Not Found</h1>
          <p>
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Button as={Link} to="/" variant="primary">
            Go Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFoundPage;
