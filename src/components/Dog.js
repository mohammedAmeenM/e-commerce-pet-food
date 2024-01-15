import React, { useContext } from "react";
import Navigationbar from "./Navigationbar";
import { UserLogin } from "../App";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Container,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dog = () => {
  const navigate = useNavigate();
  const { product } = useContext(UserLogin);
  const dogProduct = product.filter((item) => item.Animal === "Dog");
  return (
    <div style={{ background: "rgb(230, 230, 219)" }}>
      <Navigationbar />
      <Container>
        <h1 style={{ textAlign: "center", padding: "10px" }}>Dog Products</h1>
        <hr />

        <div className="d-flex align-items-center justify-content-center flex-wrap">
          {dogProduct.map((item) => (
            <div
              key={item.Id}
               className="d-flex align-items-center justify-content-center flex-wrap"
            >
              <Card
                className="shadow p-3 m-2 bg-body-tertiary rounded"
                style={{
                  width: "18rem",
                  height: "28rem",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardBody>
                  <CardImg
                    style={{ height: "15rem" }}
                    className="p-2"
                    variant="top"
                    src={item.Image}
                  />
                  <br />
                  <br />
                  <CardTitle style={{ textAlign: "center" }}>
                    {item.ProductName}
                  </CardTitle>
                  <br />
                  <h6 style={{ textAlign: "center" }}>Price:{item.Price}</h6>
                </CardBody>
                <div>
                  <Button
                    onClick={() => navigate(`/viewproduct/${item.Id}`)}
                    variant="outline-dark"
                  >
                    View Product
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Dog;
