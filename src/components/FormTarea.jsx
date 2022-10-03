import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea";

const FormTarea = () => {
  const [tarea, setTarea] = useState("");
  const [arregloTareas, setArreglotareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setArreglotareas([...arregloTareas, tarea]);
    setTarea("");
  };
const borrarTarea= (nombre)=>{
let arregloModificado = arregloTareas.filter((item)=> item !== nombre);
//actualizar el state
setArreglotareas(arregloModificado)

}


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          Formcontrol es el input
          <Form.Control
            type="text"
            placeholder="ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea arregloTareas={arregloTareas} borrarTarea={borrarTarea} ></ListaTarea>
    </div>
  );
};

export default FormTarea;
