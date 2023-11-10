import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import contact from '../Images/contact.jpg';
import CustomNavbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ContactUs = () => {
  return (
    <>
      <CustomNavbar />
      <div
        style={{
          backgroundImage: `url(${contact})`, // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh", // Ensure the background covers the entire viewport height
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h2>Contact Us</h2>
              <Form
                action="mailto:shreyasbhatbidara11@gmail.com" // Replace with your email
                method="post"
              >
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Enter your message"
                    style={{
                      maxHeight: "200px", // Set maximum height
                      resize: "vertical", // Allow vertical resizing
                    }}
                    required
                  />
                </Form.Group>

                <Button className="m-2 primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
