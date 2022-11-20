import React, { useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function NewContactModal({ closeModal }) {
  const idRef = useRef();
  const nameRef = useRef();

  function handleSumbit(e) {
    e.preventDefault();
    // createContact(idRef.current.value, nameRef.current.value);
    closeModal();
  }

  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSumbit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button className="mt-3" type="submit">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}