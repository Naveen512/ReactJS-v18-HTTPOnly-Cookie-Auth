import { useContext, useRef } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import AuthContext from "../components/shared/AuthContext";

const Login = () => {
  const email = useRef("");
  const password = useRef("");
  const { login } = useContext(AuthContext);

  const loginSubmit = async () => {
    let payload = {
      email: email.current.value,
      password: password.current.value,
    };
    await login(payload);
  };
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Login Form</legend>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" ref={email} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPasswor">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={password} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={loginSubmit}>
              Login
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;
