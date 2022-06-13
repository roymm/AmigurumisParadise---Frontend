
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "../Home";
import DetallesProducto from "../DetallesProducto";
import Carrito from "../Carrito";

function App() {
 
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/detalles" element={<DetallesProducto />} />
          <Route path="/carrito" element={<Carrito/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
