import React from "react";
import { Parallax } from "react-parallax";
import image from "../hiker.svg";
import { Card, CardDeck } from "react-bootstrap";
import "../App.css";

const pBottomStyle = {
  background: "#000",
  height: "1000px",
};

function home() {
  return (
    <div style={{ textAlign: "center" }}>
      <Parallax
        bgImage={image}
        strength={200}
        renderLayer={(precentage) => (
          <div
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: `rgba(255, 123, 23, ${precentage * 1})`,
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) scale(${precentage * 5})`,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) scale(${precentage * 5})`,
              }}
            >
              FoodForAll
            </div>
          </div>
        )}
      >
        <div style={{ height: 835 }}></div>
      </Parallax>
      <div style={{ height: "3vh" }}></div>
        <CardDeck>
          <Card className="mx-auto; " border="success" style={{ width: '18rem' }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="success" style={{ width: '18rem' }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="success" style={{ width: '18rem' }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
  );
}

export default home;
