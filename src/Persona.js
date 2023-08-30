import React from "react";
import Personas from "./Personas.json";
import { useParams } from "react-router-dom";

function Persona() {
  const { id } = useParams(); 

  const persona = Personas.find((persona) => persona.id === id);
console.log(persona)
  if (!persona) {
    return <div>La persona no fue encontrada!</div>;
  }

  return (
    <div>
      <h2>{persona.nombre} {persona.apellido}</h2>
      <p>Email: {persona.email}</p>
      <p>Edad: {persona.edad}</p>
    </div>
  );
}

export default Persona;
