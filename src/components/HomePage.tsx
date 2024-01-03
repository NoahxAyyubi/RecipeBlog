import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import foodImage from "../img/food.jpg"; // Ensure this path is correct

const HomePage: React.FC = () => {
  const quotes = [
    {
      text: "Good food is the foundation of genuine happiness.",
      author: "Auguste Escoffier",
    },

    {
      text: "One cannot think well, love well, sleep well, if one has not dined well.",
      author: "Virginia Woolf",
    },
    {
      text: "Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors - it's how you combine them that sets you apart.",
      author: "Wolfgang Puck",
    },
  ];

  return (
    <Container fluid className="text-center">
      <Row className="align-items-center justify-content-center my-5">
        <Col>
          <h1 className="display-4">Welcome to Recipe World!</h1>
          <p>Discover and share your culinary creations.</p>
        </Col>
      </Row>

      <Row className="my-4">
        <Col md={6} className="mx-auto">
          <img src={foodImage} alt="Delicious Food" className="img-fluid" />
        </Col>
      </Row>

      <Row className="my-4">
        {quotes.map((quote, index) => (
          <Col md={4} key={index} className="quote">
            <blockquote className="blockquote">
              <p className="mb-0">{quote.text}</p>
              <footer className="blockquote-footer">{quote.author}</footer>
            </blockquote>
          </Col>
        ))}
      </Row>

      <Row className="my-4">
        <Col>
          <Carousel>{/* Carousel items here */}</Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
