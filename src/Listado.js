import { useState, useEffect } from 'react';
import Personas from './Personas.js';

function Listado()
{
    const [personas, setPersonas] = useState(Personas);

    return(
        personas
    )
}

export default Listado;

