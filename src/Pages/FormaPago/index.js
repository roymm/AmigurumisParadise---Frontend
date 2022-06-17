import Logo from "../../Components/Logo";
import Footer from "../../Components/Footer";

function FormaPago(){
    return(
        <div className="bg-rose-100/40">
            <div className="flex justify-start pl-10">
                <Logo/>
                <div className="text-rose-500 text-3xl pt-20 pl-80">Método de pago</div>
                
            </div>

            <div className="text-rose-500 text-xl pl-20 pt-20 flex justify-start">
                <div className="pl-60">Elija una forma de pago:</div>



  <div className="pl-10">
    <button type="button" class="inline-flex justify-center w-full rounded-md border shadow-sm px-4 py-2 bg-gray-200 text-sm font-medium text-gray-500 hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Transferencia bancaria
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
    
  <div class="hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      
      <p href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">SINPE móvil</p>
      <p href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Efectivo</p>
      
    </div>
  </div>


</div>

<div className="pl-80 pt-40"> <button className="ml-60 relative inline-block mt-3 w-20 py-2 px-2 bg-rose-500 text-white rounded-md text-sm">Finalizar</button></div>
 

<div className="text-rose-500 pt-80 text-center">
    <Footer/>
</div>

</div>
    );
}
export default FormaPago;