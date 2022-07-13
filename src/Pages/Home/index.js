import {useEffect, useState} from "react";
import Logo from "../../Components/Logo";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Carousel from "../../Components/Carousel";
import ProductCard from "../../Components/ProductCard";
import SearchBar from "../../Components/SearchBar";
import HeroBanner from "../../Components/HeroBanner";
import {useSelector} from "react-redux";
import Navbar from "../../Components/Navbar"
import Announcement from "../../Components/Announcement";
import Slider from "../../Components/Slider";
import CategoryList from "../../Components/CategoryList"
import {authActions} from "../../Slices/authSlice";

function Home() {

    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);

    const userIsLoggedIn = useSelector((state) => state.auth.userIsLoggedIn);
    const { user: authUser } = useSelector(x => x.auth);

    useEffect(() => {
        //console.log(authUser);
        try {
            const fetchResource = async () => {
                const response = await fetch(String(process.env.REACT_APP_API_DOMAIN)+"/api/products/");
                const productsJSON = await response.json();
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
        <div className="bg-white">
            <Announcement>
                <p>
                    ¡Amigurumis con 25% de descuento! ¡BTS! ¡BTS!
                </p>
            </Announcement>

            <Navbar/>

            <Slider/>

            <CategoryList/>

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