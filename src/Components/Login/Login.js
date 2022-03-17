import React from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Digita Tu correo</Form.Label>

          <InputGroup className="mb-3">
            <Button variant="outline-secondary" id="button-addon1">
              <FontAwesomeIcon icon={faEnvelope} className=" fa-2x mt-2" />
            </Button>
            <FormControl
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              style={{ width: "70%" }}
              type="email"
              placeholder=" Email"
            />
          </InputGroup>

          <Form.Text className="text-muted">
            Nunca Compartiremos tu correo con nadie.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup className="mb-3">
            <Button variant="outline-secondary" id="button-addon1">
              <FontAwesomeIcon icon={faKey} className=" fa-2x mt-2" />
            </Button>
            <FormControl
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              style={{ width: "70%" }}
              type="email"
              placeholder=" Email"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
