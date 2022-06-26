import Logo from "../../Components/Logo";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Carousel from "../../Components/Carousel";
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

async function getAllProducts(){
    try{
        const products = await fetch("http://localhost:8500/api/products/", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        });

        console.log(await products.json());
        return products;
    }
    catch (e) {
        console.log(e);
    }

}

function Home(){
    return(
        <div className="bg-rose-100/40">
            <div className="flex justify-start pl-10">
                <Logo/>
                <div className="pl-60 ml-60">
                <Header/>
                </div>
            </div>

            <div className="flex justify-start pl-10 pt-20">
            <Carousel/>

            </div>


      
            <button onClick={getAllProducts}>Imprimir productos</button>
            <div className="grid grid-cols-3 pl-40 pt-20">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      {products.map((slide,index)=>{
  
      return(
        
          <div className="pt-10">
               
              <img src={slide.image} alt="imagen" className='w-40 h-32 rounded-3xl'></img>
              <div className="text-rose-500 pl-10 ml-5">{slide.price}</div>
              <span class="material-symbols-outlined pl-5">grade</span>
              <span class="material-symbols-outlined">grade</span>
              <span class="material-symbols-outlined">grade</span>
              <span class="material-symbols-outlined">grade</span>
              <span class="material-symbols-outlined">grade</span>
              <div>
              <button className="bg-rose-500 ml-4 py-2 px-2 text-white rounded-md cursor-pointer">Agregar a carrito</button>
            </div>
              
         
         </div>
      
       ) 
       
      
       
  })}
    
  </div>

  <div className="text-rose-500 pt-60 text-center">
    <Footer/>
  </div>

      
        </div>
    );
}
export default Home;