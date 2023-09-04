import React, { useState } from 'react';
import './Contacto.css'; // Import the CSS file

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [edad, setEdad] = useState('');

  const handleSubmit = () => {
    console.log('Form data:', nombre, apellido, email, edad);
  };

  return (
    <div className="contacto-container"> {/* Add the container div */}
      <form>
        <label>
          Nombre:
          <input type="text" className="input-field" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>
          Apellido:
          <input type="text" className="input-field" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="text" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Edad:
          <input type="text" className="input-field" value={edad} onChange={(e) => setEdad(e.target.value)} />
        </label>
        <button type="button" className="submit-button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Contacto;
