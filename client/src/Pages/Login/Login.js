import { Button, Form } from "react-bootstrap";

function Login() {
  return (
    <div>
      <h2>Please Log In</h2>
      <Form>
        <Form.Group controlId="emailLogin">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control type="email"></Form.Control>
        </Form.Group>

        <Form.Group controlId="passwordLogin">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control type="email"></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
