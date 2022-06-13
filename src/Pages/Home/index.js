import Logo from "../../Components/Logo";
import Header from "../../Components/Header";
import Carousel from "../../Components/Carousel";
import Footer from "../../Components/Footer";
import './style.css';
import cheetah from "../../ProductImages/cheetah.jpeg";
import donkey from "../../ProductImages/donkey.jpeg";
import mulan from "../../ProductImages/mulan.jpeg";
import panda from "../../ProductImages/panda.jpeg";
import platypus from "../../ProductImages/platypus.jpeg";
import turtle from "../../ProductImages/turtle.jpeg";
import pokemon from "../../ProductImages/pokemones.jpeg";
import stitch from "../../ProductImages/stitch.jpeg";
import lion from "../../ProductImages/lion.jpeg";

export const products=[
{
    id: 1,
    name: "Burro",
    image:donkey,
    price: "12.000"
},{
    id:2,
    name:"Cheetah",
    image:cheetah,
    price:"12.000"
},
{
    id:3,
    name:"Princesa Mulan",
    image:mulan,
    price:"12.000"
},
{
    id:4,
    name:"Panda",
    image:panda,
    price:"12.000"
},
{
    id:5,
    name:"Ornitorrinco",
    image:platypus,
    price:"14.000"
},
{
    id:6,
    name:"Tortuga",
    image:turtle,
    price:"12.000"
},
{
    id:7,
    name:"Pokemones",
    image:pokemon,
    price:"18.000"
},
{
    id:8,
    name:"Stitch",
    image:stitch,
    price:"8.000"
},
{
    id:9,
    name:"León",
    image:lion,
    price:"16.000"
}

]
function Home(){
    return(


        
    <div className='home'>
            
        <div className="columnaHeader">
            <div className="filaLogo">
            <Logo/>
            </div>
            <div className="filaSearch">
            <Header/>
            </div>
        
        </div>
           
            
        <Carousel/>

    <section className="fila">
      
      
        {products.map((slide,index)=>{
    
        return(
        
            <div className="columna">
                <div className="imagenYPrecio">
                <img src={slide.image} alt="imagen" className='imagenProducto'></img>
                <div className="textoPrecio">{slide.price}</div>
                <button className="boton">Agregar a carrito</button>
                </div>
            </div>
           
        
         ) 
         
        
         
    })}
      
    
    </section>

    <Footer/>
      
    </div>

    

    );

}

export default Home;