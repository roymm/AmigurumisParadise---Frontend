import lion from "../../ProductImages/lion.jpeg";
import Footer from "../../Components/Footer"
import Navbar from "../../Components/Navbar";
import Announcement from "../../Components/Announcement";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function DetailsProduct() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        try {
            const fetchResource = async () => {
                const response = await fetch(String(process.env.REACT_APP_API_DOMAIN) + `/api/products/${id}`);
                const productsJSON = await response.json();
                console.log(productsJSON)
                await setProduct(productsJSON.results);
            };
            fetchResource();
        } catch (e) {
            console.log(e);
        }

    }, []);

    return (

        <>
            <Announcement>
                <p>
                    ¡Amigurumis con 25% de descuento! ¡BTS! ¡BTS!
                </p>
            </Announcement>
            <Navbar/>
            {product == null ? <p>Cargando</p>
                :
                <div>
                    <div className={`p-2 md:p-12 flex flex-col md:flex-row`}>
                        <div className={`flex-1`}>
                            <img className={`max-w-full h-3/4 object-cover`} src={product.picture} alt={``}/>
                        </div>
                        <div className={`flex-1 px-2 py-4 md:px-10`}>
                            <h1 className={`font-semibold text-4xl`}>
                                {product.name}
                            </h1>
                            <p className={`my-5`}>
                                {product.description}
                            </p>
                            <span className={`font-light text-4xl`}>USD {product.price}</span>
                            <div className={`w-full`}>
                                <button
                                    className={`w-full p-3 mt-4 cursor-pointer text-base md:text-xl bg-pastelPink hover:bg-pink-200 transition duration-300 rounded`}
                                    onClick={() => {
                                    }}>Añadir al carrito
                                </button>
                            </div>

                        </div>
                    </div>
                </div>}

            <Footer/>
        </>);
}

export default DetailsProduct;