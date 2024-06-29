import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { React, useState } from "react";

function Register({ registerUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  function handleAddNewUser(e) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      console.error("Passwords do not match");
      return;
    }

    registerUser(name, email, password);
    navigate("/login");
  }
  return (
    <div>
      <h2>Please enter registration details</h2>
      <Form onSubmit={handleAddNewUser}>
        <Form.Group controlId="nameRegistration">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="emailRegistration">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="passwordRegistration">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="passwordConfirmationRegistration">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Register
        </Button>
        <Link to={"/login"}>Already registered? Login.</Link>
      </Form>
    </div>
  );
}

export default Register;
