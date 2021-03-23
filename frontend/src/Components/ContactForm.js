import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { checkEmailInUse } from '../Utils/helper';

const contactForm = ({ contact, handleSubmitForm }) => {
  const [validated, setValidated] = useState(false);
  const [emailInUse, setEmailInUse] = useState(false);

  const isEmailInUse = async (email) => {
    if (!email) return false;
    const emailBeingUsed = await checkEmailInUse(email);

    return emailBeingUsed;
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    const {
      firstName, lastName, email, phone,
    } = form.elements;

    const fields = {
      firstName: contact?.firstName !== firstName.value ? firstName.value : undefined,
      lastName: contact?.lastName !== lastName.value ? lastName.value : undefined,
      email: contact?.email !== email.value ? email.value : undefined,
      phoneNumber: contact?.phoneNumber !== phone.value ? phone.value : undefined,
      id: contact?.id,
    };

    if (form.checkValidity() === false) {
      setValidated(true);
    } else if (form.checkValidity() === true) {
      setValidated(false);
    }

    if (await isEmailInUse(fields.email)) {
      setEmailInUse(true);
    } else if (form.checkValidity() === true) {
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
            Provide a valid first name
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
            Provide a valid last name
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
            isInvalid={emailInUse && !validated}
          />
          <Form.Control.Feedback type="invalid">
            {emailInUse && !validated ? 'This email is already in use' : 'Please provide a valid email'}
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
            Provide a valid phone (6 digits)
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default contactForm;
