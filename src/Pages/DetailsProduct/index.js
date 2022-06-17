import Logo from "../../Components/Logo";
import lion from "../../ProductImages/lion.jpeg";
import Footer from "../../Components/Footer"
function DetailsProduct(){
    return(
        
        <div className="bg-rose-100/40">
            <div className="flex justify-start pl-10">
            <Logo/>

            <div className="text-rose-500 text-justify pl-80 text-3xl pt-20">
                Detalle del producto
            </div>
            
            
            </div>

            <div className="flex justify-start">
            <div className="pl-10">
            <img src={lion} alt="imagen del producto" className="w-40 h-32 rounded-[60px] mt-20"></img>
            <div className="pt-10 font-bold underline decoration-rose-500">Descripción</div>
            <div className="pt-5 font-semibold">León Sebastián</div>
            <div className="pr-20 pt-5 text-justify"> Como un guionista y un titiritero, Sebastián sabía exactamente lo que quería ser desde el primer minuto de la primera vez que vio "El cristal oscuro". No podía creer sus ojos, todo el trabajo detrás de escenas, los meses(incluso años) necesarios para crear un mundo animado tan fantástico usando solo muñecas y cuerdas. Ese mismo día empezó a construir su primer títere.</div>
            </div>

            <div className="pl-10">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

            <div className="pt-10 pr-60 font-bold">León Sebastián</div>
            <div className="pt-5 pr-60"> <button className="w-full py-2 px-4 bg-gray-300 rounded-md text-sm">Categoría</button></div>
            <span class="material-symbols-outlined pt-3">grade</span>
            <span class="material-symbols-outlined pt-3">grade</span>
            <span class="material-symbols-outlined pt-3">grade</span>
            <span class="material-symbols-outlined pt-3">grade</span>
            <span class="material-symbols-outlined pt-3">grade</span>
            <div className="pl-8">Precio</div>
            <div className="pt-5 pr-60"> <button className="w-full py-2 px-2 bg-rose-500 text-white rounded-md text-sm">Añadir a carrito</button></div>
            </div>
            


            
            </div>

            <div className="pl-80">
            <div className="text-rose-500 pt-20 pl-60 text-justify">
            <Footer/>
            </div>
            </div>
            
            
            
            
            
        </div>
    );
}
export default DetailsProduct;