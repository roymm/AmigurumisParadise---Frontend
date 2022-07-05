import {useEffect, useState} from "react";
import Logo from "../../Components/Logo";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Carousel from "../../Components/Carousel";
import ProductCard from "../../Components/ProductCard";
import SearchBar from "../../Components/SearchBar";
import HeroBanner from "../../Components/HeroBanner";
import {useSelector} from "react-redux";

function Home() {

    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);

    const userIsLoggedIn = useSelector((state) => state.auth.userIsLoggedIn);
    const { user: authUser } = useSelector(x => x.auth);

    useEffect(() => {
        console.log(userIsLoggedIn);
        console.log(authUser);
        try {
            const fetchResource = async () => {
                const response = await fetch("http://localhost:8500/api/products/");
                const productsJSON = await response.json();
                console.log(productsJSON.results);
                setAllProducts(productsJSON.results);
                setProducts(productsJSON.results);
            };
            fetchResource();
        } catch (e) {
            console.log(e);
        }

    }, []);

    const filterCards = event => {
        const value = event.target.value.toLowerCase();
        const filteredProducts = allProducts.filter(product => (`${product.name} ${product.description}`.toLowerCase().includes(value)));
        setProducts(filteredProducts);
    }

    return (
        <div className="bg-pastelLightPink">
            <div className="flex justify-start pl-10">
                <Logo/>
                <div className="pl-60 ml-60">
                    <Header/>
                </div>
            </div>

            <HeroBanner title="Prueba" subtitle="Prueba" src="https://cdn.knitpro.eu/brandCoverImages/TRENDZ%20BANNER%20CROCHET.jpg"/>

            <div className="flex justify-start pl-10 pt-20">
                <Carousel/>
            </div>

            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <SearchBar action={filterCards}></SearchBar>
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