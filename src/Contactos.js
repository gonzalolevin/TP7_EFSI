import React, { useState } from 'react';

function Contacto(){
const [nombre, setNombre] = useState('');
const [apellido, setApellido] = useState('');
const [email, setEmail] = useState('');
const [edad, setEdad] = useState('');

const handleSubmit = () => {
    console.log('Form data:', nombre, apellido, email, edad);
  };

return (
    <form >
    <label>
      Nombre:
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
    </label>
    <br />
    <label>
      Apellido:
      <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
    </label>
    <br />
    <br />
    <label>
      Email:
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
    </label>
    <br />
    <br />
    <label>
      Edad:
      <input type="text" value={edad} onChange={(e) => setEdad(e.target.value)} />
    </label>
    <br />
    <button type="button" onClick={handleSubmit}>Submit</button>
  </form>
);}

export default Contacto;