import Logo from "../../Components/Logo";
import Footer from "../../Components/Footer";
import './styles.css';

import cheetah from "../../ProductImages/cheetah.jpeg";


function Carrito(){
    return(
<div className="carrito">
    <div className="logo"><Logo/></div>
    <h1 className="tituloCarrito">Tienes los siguientes elementos en el carrito:</h1>

<div className="productoAComprar">
    <div className="columnaImagen">
<img className="imagenCarrito" alt="imagen producto a comprar" src={cheetah}/>
    </div>
    <div className="columnaCantidad">
    <div class="dropdown">
        <button class="dropbtn">Cantidad</button>
        <div class="dropdown-content">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        </div>
    </div>
    


   </div>
<button className="botonEliminar">Eliminar</button>

<div className="columnaPrecio">
    <p>Precio</p>
</div>
</div>

<div className="subtotal">
<p>Subtotal</p>
<p>Subtotal(# de productos):</p>
<p>Precio total</p>
</div>
<button className="botonPagar">Pagar</button>


<div className="abajo">
<Footer/>
</div>


</div>
    );
}
export default Carrito;