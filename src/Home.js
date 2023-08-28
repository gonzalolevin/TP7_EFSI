import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Personas from './Personas.json';
import { Link } from 'react-router-dom';

function Home(){

    return (



        <div>
        <ul class="list-group">
        
  
          {Personas.map((persona) => (
            <li class="list-group-item">
                <div key={persona.id}>
                <Link to={`/persona/${persona.id}`} className="nav-link">
                    <h2>{persona.nombre} {persona.apellido}</h2>
                </Link>
                </div>
            </li>
          ))}
          
          </ul>
        </div>
      );
    }

export default Home;