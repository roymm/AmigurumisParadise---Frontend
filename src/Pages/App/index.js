
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "../Home";
import Login from "../Login";
import Registro from "../Register";
import DetailsProduct from "../DetailsProduct";
import Carrito from "../Carrito";
import Facturacion from "../Facturacion";
import FormaPago from "../FormaPago";

function App() {
 
  return (
      <BrowserRouter>
        <Routes>
           <Route path="/home" element={<Home />} />
           <Route path="/login" element={<Login/>}/>
           <Route path="/registro" element={<Registro/>}/>
           <Route path="/detalles" element={<DetailsProduct/>}/>
           <Route path="/carrito" element={<Carrito/>}/>
           <Route path="/facturacion" element={<Facturacion/>}/>
           <Route path="/pago" element={<FormaPago/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
