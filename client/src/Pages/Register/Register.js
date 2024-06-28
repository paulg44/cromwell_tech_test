import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <h2>Please enter registration details</h2>
      <Form>
        <Form.Group controlId="nameRegistration">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>

        <Form.Group controlId="emailRegistration">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control type="email"></Form.Control>
        </Form.Group>

        <Form.Group controlId="passwordRegistration">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>

        <Form.Group controlId="passwordConfirmationRegistration">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="text"></Form.Control>
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
