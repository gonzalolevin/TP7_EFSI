import React from "react";
import Personas from './Personas.json';


// reduce y filter 

function Estadisticas(){
    return (
        <div>
            <ul class="list-group">
                {Personas.map((persona) => (
                    <li class="list-group-item">
                        <div key={persona.id}>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
      );
    }
export default Estadisticas;