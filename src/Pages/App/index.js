
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "../Home";
import DetallesProducto from "../DetallesProducto";

function App() {
 
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/detalles" element={<DetallesProducto />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
