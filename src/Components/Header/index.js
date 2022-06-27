import {useNavigate} from 'react-router-dom';
import { useState } from "react";

import Modal from "../Modal";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";

function Header(){
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const navigate=useNavigate();

    const navigateCarrito=()=>{
        navigate('/carrito');
    }


    return(
    <>
        {showLogin && (
            <Modal onClose={() => {setShowLogin(false);}}>
                <Login></Login>
            </Modal>
        )}

        {showRegister && (
            <Modal onClose={() => {setShowRegister(false);}}>
                <Register></Register>
            </Modal>
        )}

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <div className="pl-10 pt-20">


        <input placeholder="Buscar" className="rounded-md"></input>
        <span className="material-symbols-outlined cursor-pointer ml-2">search</span>
        <span onClick={navigateCarrito} className="material-symbols-outlined cursor-pointer ml-5">shopping_cart</span>
        <button onClick={() => {setShowLogin(true);}} className="bg-rose-500 ml-5 py-2 px-2 text-white rounded-md cursor-pointer">Ingresar</button>

        <button onClick={() => {setShowRegister(true);}} className="bg-rose-500 ml-5 py-2 px-2 text-white rounded-md cursor-pointer">Registrarse</button>
        </div>



    </>
    );


}

export default Header;