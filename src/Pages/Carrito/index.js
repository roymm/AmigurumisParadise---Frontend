import Logo from "../../Components/Logo";
import lion from "../../ProductImages/lion.jpeg";
import Footer from "../../Components/Footer";

function Carrito(){
    return(
<div className="bg-rose-100/40">
            <div className="flex justify-start pl-10">
            <Logo/>
            <div className="text-rose-500 pl-40 text-2xl pt-20"> Tienes los siguientes elementos en el carrito:</div>
            </div>



    <div className="flex justify-start pt-20 pl-10">
<img src={lion} alt="imagen del producto" className="w-40 h-32 rounded-[60px]"></img>
  


<div class="relative inline-block text-left pt-14 pl-10">
  <div>
    <button type="button" class="inline-flex justify-center w-full rounded-md border shadow-sm px-4 py-2 bg-gray-200 text-sm font-medium text-gray-500 hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Cantidad
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
    
  <div class="hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      
      <p href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">1</p>
      <p href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">2</p>
      <p href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">3</p>
      <p href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">4</p>
      <p href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">5</p>
      
    </div>
  </div>
</div>


    <div className="pt-16 pl-8">Precio</div>

    <div className="pl-80 text-center">
        <div className="font-bold">Subtotal</div>
        <div>Subtotal(# de productos)</div>
        <div>Precio total</div>
       <button className="relative inline-block mt-3 w-20 py-2 px-2 bg-rose-500 text-white rounded-md text-sm">Pagar</button>
    </div>
    
    </div>

    <div className="relative inline-block pl-60"> <button className="w-full py-2 px-2 bg-rose-500 text-white rounded-md text-sm">Eliminar</button></div>
    
  
 <div className="text-rose-500 pt-80 text-center">
 <Footer/>
 </div>   



</div>
    );
}
export default Carrito;