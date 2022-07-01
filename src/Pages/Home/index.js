import {useEffect, useState} from "react";
import Logo from "../../Components/Logo";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Carousel from "../../Components/Carousel";
import ProductCard from "../../Components/ProductCard";
//import {getAllProducts} from "../../Slices/productSlice";

//import {useDispatch, useSelector} from "react-redux";

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
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => {
                    return (
                        <div className="group relative">
                            <ProductCard productData={product}></ProductCard>
                        </div>
                    )
                })}
                </div>
            </div>

            <div className="text-rose-500 pt-60 text-center">
                <Footer/>
            </div>


        </div>
    );
}

export default Home;