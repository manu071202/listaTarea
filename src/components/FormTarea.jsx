import React from "react";
import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea"
const FormTarea = () => {
  return (
    <div>
      
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
            Formcontrol es el input
          <Form.Control type="text" placeholder="ingrese una tarea" />

        <Button variant="primary" type="submit">
          enviar
        </Button>
        </Form.Group>
      </Form>
      <ListaTarea></ListaTarea>
    </div>
  );
};

export default FormTarea;
