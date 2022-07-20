
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "../Home";
import Login from "../Login";
import Registro from "../Register";
import DetailsProduct from "../DetailsProduct";
import Carrito from "../Carrito";
import Facturacion from "../Facturacion";
import FormaPago from "../FormaPago";
import Agradecimiento from "../Agradecimiento";
import AgregarProducto from "../AgregarProducto";
import ProductoAgregado from "../ProductoAgregado";
import ErrorProducto from "../ErrorProducto";
import 'react-toastify/dist/ReactToastify.css';

function App() {
 
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/ingresar" element={<Login/>}/>
          <Route path="/registro" element={<Registro/>}/>
          <Route path="/producto/:id" element={<DetailsProduct/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
          <Route path="/carrito/facturacion" element={<Facturacion/>}/>
          <Route path="carrito/pago" element={<FormaPago/>}/>
          <Route path="carrito/agradecimiento" element={<Agradecimiento/>}/>
          <Route path="/producto/agregar" element={<AgregarProducto/>}/>
          <Route path="/producto/agregar/success" element={<ProductoAgregado/>}/>
          <Route path="/producto/agregar/error" element={<ErrorProducto/>}/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
