import "./Login.css";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Login({ login }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  async function handleUserLogin(e) {
    e.preventDefault();

    // Expect both input fields to be filled
    if (!loginEmail || !loginPassword) {
      alert("Username and Password fields are required");
      return;
    } else {
      await login(loginEmail, loginPassword);
      navigate("/landing");
    }
  }

  return (
    <div className="login">
      <h2>Please Log In</h2>
      <Form onSubmit={handleUserLogin} className="form">
        <Form.Group className="mb-4" controlId="emailLogin">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-4" controlId="passwordLogin">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" style={{ background: "#ff5200", border: "none" }}>
          Login
        </Button>
      </Form>
      <Link to={"/"}>No Account? Register here</Link>
    </div>
  );
}

export default Login;
