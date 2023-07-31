import { useState, useEffect } from 'react';
import axios from 'axios';
import Personas from './Personas.js';

function Listado()
{
    const [personas, setPersonas] = useState(Personas);

    return(
        personas
    )
}

export default Listado;

