import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout.js";
import Estadisticas from "./Estadisticas.js";
import Contactos from "./Contactos.js";

const App = () => {
 return (
   <>
   
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/Contactos" element={<Contactos />}></Route>
          <Route path="/Estadistcas" element={<Estadisticas/>}></Route>
       </Routes>
     </BrowserRouter>
   </>
 );
};

export default App;