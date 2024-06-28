import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login({ login }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  async function handleUserLogin(e) {
    e.preventDefault();

    try {
      await login(loginEmail, loginPassword);
      navigate("/landing");
    } catch (error) {
      console.error("error logging in");
    }
  }

  return (
    <div>
      <h2>Please Log In</h2>
      <Form onSubmit={handleUserLogin}>
        <Form.Group controlId="emailLogin">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="passwordLogin">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
