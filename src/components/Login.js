import React, { useContext, useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserLogin } from "../App";

const Login = () => {
  const navigate = useNavigate();
  const { user, setLogin } = useContext(UserLogin);
  const nameRef = useRef();
  const passwordRef = useRef();
  const handileclick = (eve) => {
    const newNameRef = nameRef.current.value;
    const newPasswordRef = passwordRef.current.value;
    const findName = user.find((users) => users.name === newNameRef);
    const findPassword = user.find(
      (users) => users.password === newPasswordRef
    );
    
    if (findName && findPassword) {
      setLogin(true);
      navigate("/");
      alert("Login Success");
    } else {
      alert(" incorrect username or password");
    }
  };

  return (
    <div style={{ alignItems: "center" }} className="p-4  mt-4 ">
      <Container
        className="border p-4  mt-5 "
        style={{ width: "500px", alignItems: "center", borderRadius: "20px",background: 'rgb(230, 230, 219)' }}
      >
        <h1 style={{ textAlign: "center" }}>Login </h1>
        <div >
          <Form
            className="border p-4 m-4 bg-white"
            style={{ borderRadius: "20px" }}
          >
            <input
              ref={nameRef}
              type="text"
              placeholder="User Name.."
              style={{
                width: "300px",
                height: "40px",
                borderRadius: "10px",
                border: "1.2px solid",
              }}
            />
            <br />
            <br />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              style={{
                width: "300px",
                height: "40px",
                borderRadius: "10px",
                border: "1.2px solid",
              }}
            />
            <br />
            <br />
            <div className="d-flex">
              <div className="col-8">
                <Button variant="outline-dark" onClick={handileclick}>
                  Login
                </Button>
              </div>
              <div className="col-4">
                <p>
                  <Link to="/signup">Register Here</Link>
                </p>
              </div>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
