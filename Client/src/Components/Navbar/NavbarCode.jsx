import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation, Link } from "react-router-dom";

function NavbarCode() {
  const location = useLocation();
  const isLoggedIn =
    location.pathname !== "/signin" && location.pathname !== "/register";

  return (
    <>
      <Navbar expand="lg" sticky="top" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#">CodeBlind</Navbar.Brand>
          <Form inline>
            <Row>
              <Col xs="auto" style={{ marginLeft: "2px" }}>
                {isLoggedIn ? (
                  <Link to="/signin">
                    <Button
                      style={{ color: "white", border: "1px solid white" }}
                    >
                      Logout
                    </Button>
                  </Link>
                ) : (
                  <Link to="/signin">
                    <Button type="button">Sign-In</Button>
                  </Link>
                )}
              </Col>
            </Row>
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarCode;
