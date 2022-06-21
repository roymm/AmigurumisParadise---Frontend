import {Routes, Route, useNavigate} from 'react-router-dom';

function Header(){

    const navigate=useNavigate();

    const navigateLogIn=()=>{
        navigate('/logIn');
    }

    const navigateRegistro=()=>{
        navigate('/registro');
    }

    const navigateCarrito=()=>{
        navigate('/carrito');
    }


    return(
    <>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    
    <div className="pl-10 pt-20">
        
        
        <input placeholder="Buscar" className="rounded-md"></input>
        <span class="material-symbols-outlined cursor-pointer ml-2">search</span>
        <span onClick={navigateCarrito} class="material-symbols-outlined cursor-pointer ml-5">shopping_cart</span>
        <button onClick={navigateLogIn} className="bg-rose-500 ml-5 py-2 px-2 text-white rounded-md cursor-pointer">Ingresar</button>
        
        <button onClick={navigateRegistro} className="bg-rose-500 ml-5 py-2 px-2 text-white rounded-md cursor-pointer">Registrarse</button>
        </div>
        
    

    </>
    );


}

export default Header;