import React from "react";
import { Button, ListGroup } from "react-bootstrap";
const ItemTarea = () => {
  return (
    <div>
      <ListGroup.Item>Tarea 1</ListGroup.Item>
      <Button variant='danger' >borrar Tarea</Button>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </div>
  );
};

export default ItemTarea;
