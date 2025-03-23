import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Préparation des données pour l'envoi
    const data = {
      email: email,
      password: password,
    };

    // Envoi de la requête POST
    axios
      .post("http://localhost:8000/signin", data)
      .then((response) => {
        console.log("Response:", response.data);
        alert("Connexion réussie !");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Erreur lors de la connexion.");
      });
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Row>
        <Col>
          <Card className="shadow-lg" style={{ width: "24rem" }}>
            <Card.Body>
              <Card.Title className="text-center mb-4">Sign In</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Met à jour l'état email
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Met à jour l'état password
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Sign In
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;