import Logo from "../../Components/Logo";
import React from 'react';
import DragAndDrop from "../../Components/DragAndDrop";
import Footer from "../../Components/Footer";
function AgregarProducto(){
    return(
        <div className="bg-rose-100/40">
            <div className="flex justify-start pl-10">
                <Logo/>
                <div className="text-rose-500 font-bold text-3xl pt-20 ml-40 pl-20">Agregue un nuevo producto</div>
            </div>
           
            <div className="flex justify-center py-2 px-2">
            <DragAndDrop/>
            </div>

<div className="">

<div className="flex justify-center"><input type="text" name="precio" className="w-64 p-2 border-b-2 border-gray-300 rounded mt-1" placeholder="Precio"/></div>
<div className="flex justify-center"><input type="text" name="titulo" className="w-64 p-2 border-b-2 border-gray-300 rounded mt-1" placeholder="Título"/></div>
<div className="flex justify-center"><input type="text" name="description" className="w-64 p-2 border-b-2 border-gray-300 rounded mt-1" placeholder="Descripción"/></div>
<div className="flex justify-center">
<button className="w-64 mt-4 py-2  bg-rose-500 hover:bg-rose-400 text-white font-semibold rounded-md text-white text-sm">Agregar</button>
</div>
</div>

<div className="text-rose-500 pt-20 text-center">
    <Footer/>
</div>


        </div>
    );
}
export default AgregarProducto;