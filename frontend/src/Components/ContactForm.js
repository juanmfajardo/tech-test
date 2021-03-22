import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const contactForm = ({ contact, handleSubmitForm }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      const fields = {
        firstName: event.target.elements.firstName.value,
        lastName: event.target.elements.lastName.value,
        email: event.target.elements.email.value,
        phoneNumber: event.target.elements.phone.value,
        id: contact?.id,
      };
      handleSubmitForm(fields);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="firstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            defaultValue={contact?.firstName}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid first name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="lastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            defaultValue={contact?.lastName}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid last name
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            defaultValue={contact?.email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="texts"
            required
            defaultValue={contact?.phoneNumber}
            pattern="[0-9]{9}"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid phone
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default contactForm;
