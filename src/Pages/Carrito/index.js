import Logo from "../../Components/Logo";
import lion from "../../ProductImages/lion.jpeg";
import Footer from "../../Components/Footer";
import Announcement from "../../Components/Announcement";
import Navbar from "../../Components/Navbar";
import CartItem from "../../Components/CartItem";

function Carrito() {
    return (
        <>
            <Announcement/>
            <Navbar/>
            <div className={`p-2 md:p-5`}>
                <h1 className="bold text-center">SU CARRITO</h1>
            </div>
            <div id={`bottom`} className="flex justify-between flex-col md:flex-row">
                <div id={`info`} className={`w-3/4 p-5`}>
                    <CartItem/>
                    <div className={`bg-gray-100 border-none h-1`}/>
                    <CartItem/>
                </div>

                <div id={`summary`} className={`w-1/4 border-2 border-pastelPink border-r-2 p-5 h-1/2 md:mx-5`}>
                    <h1 className={`font-semibold`}>
                        RESUMEN DE COMPRA
                    </h1>
                    <div className={`flex my-8 justify-between text-xl font-light`}>
                        <h1>Subtotal</h1>
                        <span>USD 445</span>
                    </div>
                    <div className={`flex my-8 justify-between text-xl font-light`}>
                        <h1>Costo de envío</h1>
                        <span>USD 445</span>
                    </div>
                    <div className={`flex my-8 justify-between text-xl font-light`}>
                        <h1>Descuento</h1>
                        <span>USD 445</span>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Carrito;