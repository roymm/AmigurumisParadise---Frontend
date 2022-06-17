import Logo from "../../Components/Logo";
import Footer from "../../Components/Footer";

function Agradecimiento(){
    return(
        <div className="bg-rose-100/40">

            <div className="flex justify-start pl-10">
                <Logo/>
                <div className="text-rose-500 text-3xl pt-20 pl-80 ml-10">¡Gracias!</div>

            </div>
            <div>
                <div className="text-rose-500 text-xl text-center pl-40 pr-40 pt-20">
                    Muchas gracias por comprar en Amigurumis Paradise.
                    Cuando esté confirmada su compra, se le enviará un mensaje al correo con la información de su pedido.

                </div>
            </div>

            <div className="text-rose-500 pt-80 text-center">
                <Footer/>
            </div>



        </div>
    );
}
export default Agradecimiento;