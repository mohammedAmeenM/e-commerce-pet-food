import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi2";
import { RiAdminFill } from "react-icons/ri";
import { CiLogin } from "react-icons/ci";
import { Button, Form } from "react-bootstrap";

const Navigationbar = () => {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="nav" sticky="top">
      <Container fluid className="nav-bar">
        <Navbar.Brand>
          <h1 className="nav-title" onClick={() => navigate("/")}>
            Pets Foods
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-links">
            <Nav.Link
              className="underline-collection"
              onClick={() => navigate("collection")}
            >
              Collection
            </Nav.Link>
            <Nav.Link
              className="underline-cat "
              onClick={() => navigate("cat")}
            >
              Cat
            </Nav.Link>
            <Nav.Link className="underline-dog" onClick={() => navigate("dog")}>
              Dog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="icons" style={{ justifyContent: "end" }}>
          <Nav style={{ gap: "0.6rem", alignItems: "center" }}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">Search</Button>
            </Form>
            <Nav.Link
              onClick={() => navigate("cart")}
              style={{ fontSize: "27px" }}
            >
              <HiShoppingCart />
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("login")}
              style={{ fontSize: "27px" }}
            >
              <CiLogin />
            </Nav.Link>
            <Nav.Link style={{ fontSize: "27px" }}>
              <RiAdminFill />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
