import React, { useContext, useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserLogin } from "../App";

const Signup = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserLogin);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const submitClick = (eve) => {
    const setName = nameRef.current.value;
    const setPassword = passwordRef.current.value;
    const value = { name: setName, password: setPassword };

    if (!setName || !setPassword) {
      alert("fill");
    } else {
      navigate("/login");
    }

    setUser([...user, value]);
    console.log(user);
  };

  return (
    <div style={{ alignItems: "center" }} className="p-4  mt-4 ">
      <Container
        className="border p-4  mt-5 "
        style={{ width: "500px", alignItems: "center", borderRadius: "20px" ,background: 'rgb(230, 230, 219)'}}
      >
        <h1 style={{ textAlign: "center" }}>Sign up</h1>
        <Form
          className="border p-4 m-4 bg-white"
          style={{ borderRadius: "20px", textAlign: "center" }}
        >
          <input
            type="text"
            name="text"
            placeholder="User Name"
            required
            ref={nameRef}
            style={{
              width: "300px",
              height: "40px",
              borderRadius: "10px",
              border: "1.2px solid",
            }}
          />{" "}
          <br />
          <br />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            style={{
              width: "300px",
              height: "40px",
              borderRadius: "10px",
              border: "1.2px solid",
            }}
          />{" "}
          <br />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            ref={passwordRef}
            style={{
              width: "300px",
              height: "40px",
              borderRadius: "10px",
              border: "1.2px solid",
            }}
          />{" "}
          <br />
          <br />
          <Button variant="outline-dark" onClick={submitClick}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Signup;
