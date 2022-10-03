import React from "react";
import { Button, ListGroup } from "react-bootstrap";
const ItemTarea = ({nombreTarea , borrarTarea}) => {
  return (
    <div>
      <ListGroup.Item className='d-flex justify-content-between'>
       {nombreTarea}
       <Button variant="danger" onClick={()=>{borrarTarea(nombreTarea)}}>borrar Tarea</Button>
      </ListGroup.Item>
      
    </div>
  );
};

export default ItemTarea;
