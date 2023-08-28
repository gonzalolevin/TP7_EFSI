import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";
import Estadisticas from "./Estadisticas";
import Contactos from "./Contactos.js";
import Error from "./Error.js"
import Home from "./Home.js";
import Persona from "./Persona.js";

const App = () => {
  return (
    <BrowserRouter>
      <Layout> {/* Assuming Layout should wrap around the routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contactos" element={<Contactos />} />
          <Route path="/Estadisticas" element={<Estadisticas />} />
          <Route path="/Error" element={<Error />} />
          {/* Define the route for Persona */}
          <Route path="/persona/:id" element={<Persona />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
