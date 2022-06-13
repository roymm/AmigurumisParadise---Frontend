import './style.css';
import Footer from "../../Components/Footer";
import Logo from "../../Components/Logo";

import cheetah from "../../ProductImages/cheetah.jpeg";

function DetallesProducto(){
    return(
        
        <div className="detallesProducto">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <div className="logo">
            <Logo/>
            </div>
            <h1 className="textoTitulo">Detalle del producto</h1>
            
            <img className="imagenDetallesProducto" alt="imagen producto" src={cheetah}/>
            <h2 className="tituloProducto">Rosa Cheetah</h2>
            <button className="categoria">Categoría</button>

            <div className="estrellas">
            <span class="material-symbols-outlined">grade</span>
            <span class="material-symbols-outlined">grade</span>
            <span class="material-symbols-outlined">grade</span>
            <span class="material-symbols-outlined">grade</span>
            <span class="material-symbols-outlined">grade</span>
            </div>
            <p className="precio">Precio</p>
            <button className="agregarACarrito">Añadir a carrito</button>
            <div className="descripcion">
            <p>Descripción</p>
            <p>
                Rosa Cheetah: Todos saben que las cheetahs son los animales terrestres más rápidos. Pero a Rosa no le gustan mucho los deportes ni perseguir a otros animales-prefiere su comida en forma de pizza, con queso mozarella, salsa de tomate y un montón de aceitunas encima. Rosa prefiere utilizar sus habilidades para leer y estudiar súper rápido. Gracias a eso, ella ya tiene varios títulos universitarios, incluyendo uno en robótica, informática, ingeniería civil y ambiental. También está terminando su bachillerato en literatura del inglés y podría empezar un nuevo curso de Filosofía. Algunas personas pueden pensar que es mucho trabajo, pero para Rosa, aprender de todo lo que le rodea es tan importante como respirar. Estudiaría cualquier cosa, excepto deportes.
            </p>

            </div>
           


            <Footer/>
        </div>
       
    );
}
export default DetallesProducto;