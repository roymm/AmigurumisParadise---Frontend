function Header(){

    return(
    <>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    
    <div className="busqueda">
        
        
        <input placeholder="Buscar" className="cajaBusqueda"></input>
        <span class="material-symbols-outlined">search</span>
        <span class="material-symbols-outlined">shopping_cart</span>
        <button className="boton">Ingresar</button>
        
        <button className="boton">Registrarse</button>
        </div>
        
    

    </>
    );


}

export default Header;