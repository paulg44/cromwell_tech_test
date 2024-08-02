import "./Login.css";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Login({ login }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [erros, setErrors] = useState("");
  const navigate = useNavigate();

  async function handleUserLogin(e) {
    e.preventDefault();

    // Expect both input fields to be filled
    if (!loginEmail || !loginPassword) {
      alert("Username and Password fields are required");
      return;
    } else {
      signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/landing");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrors("Incorrect email or password");

          console.error(errorCode, errorMessage);
        });
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

        <p style={{ color: "red" }}>{erros}</p>

        <Button type="submit" style={{ background: "#ff5200", border: "none" }}>
          Login
        </Button>
      </Form>
      <Link to={"/"}>No Account? Register here</Link>
    </div>
  );
}

export default Login;
