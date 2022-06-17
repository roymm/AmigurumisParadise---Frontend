import Logo from "../../Components/Logo";
import Footer from "../../Components/Footer";

function Facturacion(){
    return(
        <div className="bg-rose-100/40">
            <div className="flex justify-start pl-10">
                <Logo/>
                <div className="text-rose-500 text-3xl pt-20 pl-60">Detalles de facturación</div>
                
            </div>

            <div className="px-80 pb-8 pl-60">
                <form action="" className="space-y-2">
                <div>
                <input type="text" className="w-full p-2 border-b-2 border-gray-300 rounded mt-1" placeholder="Nombre"/>
                </div>

                <div>
                <input type="text" className="w-full p-2 border-b-2 border-gray-300 rounded mt-1" placeholder="Apellido"/>
                </div>

                <div>
                <input type="text" className="w-full p-2 border-b-2 border-gray-300 rounded mt-1" placeholder="Dirección"/>
                </div>

                <div>
                <input type="text" className="w-full p-2 border-b-2 border-gray-300 rounded mt-1" placeholder="Código Postal"/>
                </div>

                <div>
                <input type="text" className="w-full p-2 border-b-2 border-gray-300 rounded mt-1" placeholder="Teléfono"/>
                </div>
                
                <div>
                <button className=" ml-60 w-40 h-10 bg-rose-500 text-white rounded-md text-md">Realizar pago</button>
                </div>
                </form>

                <div className="text-rose-500 pt-80 text-center">
                    <Footer/>
                </div>
            </div>







        </div>
    );
}
export default Facturacion;