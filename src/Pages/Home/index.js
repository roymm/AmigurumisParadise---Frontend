import {useEffect, useState} from "react";
import Logo from "../../Components/Logo";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Carousel from "../../Components/Carousel";
import {getAllProducts} from "../../Slices/productSlice";
import {useDispatch, useSelector} from "react-redux";

function Home() {
    /*PARA PRUEBA CON DISPATCH Y SLICES
    const products = useSelector(
        (state) => state.product.products
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);*/

    /*PARA PRUEBA CON USESTATE*/

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchResource = async () => {
            const response = await fetch("/api/products/");
            const productsJSON = await response.json();
            console.log(productsJSON.results);
            setProducts(productsJSON.results);
        };
        fetchResource();

    }, []);

    return (
        <div className="bg-rose-100/40">
            <div className="flex justify-start pl-10">
                <Logo/>
                <div className="pl-60 ml-60">
                    <Header/>
                </div>
            </div>

            <div className="flex justify-start pl-10 pt-20">
                <Carousel/>

            </div>
            <button onClick={getAllProducts}>Imprimir productos</button>
            <div className="grid grid-cols-3 pl-40 pt-20">
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
                {products.map((slide, index) => {

                    return (

                        <div className="pt-10">

                            <img src={slide.picture} alt="imagen" className='w-40 h-32 rounded-3xl'></img>
                            <div className="text-rose-500 pl-10 ml-5">{slide.price}</div>
                            <span class="material-symbols-outlined pl-5">grade</span>
                            <span class="material-symbols-outlined">grade</span>
                            <span class="material-symbols-outlined">grade</span>
                            <span class="material-symbols-outlined">grade</span>
                            <span class="material-symbols-outlined">grade</span>
                            <div>
                                <button
                                    className="bg-rose-500 ml-4 py-2 px-2 text-white rounded-md cursor-pointer">Agregar
                                    a carrito
                                </button>
                            </div>


                        </div>

                    )


                })}

            </div>

            <div className="text-rose-500 pt-60 text-center">
                <Footer/>
            </div>


        </div>
    );
}

export default Home;