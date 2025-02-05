import "./Register.css";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { React, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

function Register({ registerUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleAddNewUser(e) {
    e.preventDefault();

    // Password Validation
    function checkPasswordValidation(password) {
      const passwordRegex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

      if (password.match(passwordRegex)) {
        if (password === passwordConfirm) {
          return true;
        } else {
          alert("Passwords do not match!");
          return false;
        }
      } else {
        alert(
          "Password must contain 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter"
        );
        return false;
      }
    }

    // If all fields are filled and password is accepted, this code runs
    if (checkPasswordValidation(password)) {
      try {
        await createUserWithEmailAndPassword(auth, email, password).then(
          (userCredential) => {
            const user = userCredential.user;

            updateProfile(user, {
              displayName: name,
            });
            console.log(user);
            navigate("/login");
          }
        );
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        console.error(errorCode, errorMessage);
      }
    }
  }
  return (
    <div className="register">
      <h2>Please enter registration details</h2>
      <Form onSubmit={handleAddNewUser}>
        <Form.Group className="mb-4" controlId="nameRegistration">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-4" controlId="emailRegistration">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-4" controlId="passwordRegistration">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group
          className="mb-4"
          controlId="passwordConfirmationRegistration"
        >
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            required
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" style={{ background: "#ff5200", border: "none" }}>
          Register
        </Button>
      </Form>
      <Link to={"/login"}>Already registered? Login.</Link>
    </div>
  );
}

export default Register;
