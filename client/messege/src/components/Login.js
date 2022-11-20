import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

export default function Login({ onIdSumbit }) {
  const idRef = useRef();

  function handleSumbit(e) {
    e.preventDefault();
    onIdSumbit(idRef.current.value);
  }

  function createNewId() {
    onIdSumbit(uuidV4());
  }

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSumbit} className="w-100">
        <Form.Group>
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="me-2 mt-2">
          Login
        </Button>
        <Button onClick={createNewId} variant="secondary" className="me-2 mt-2">
          Create a New ID
        </Button>
      </Form>
    </Container>
  );
}
