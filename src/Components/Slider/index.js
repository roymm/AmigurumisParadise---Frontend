import {ArrowRight, ArrowLeft} from "@mui/icons-material";
import {useState} from "react";

import ImageAction from "../ImageAction";

const sliderItems = [
    {
        id: 1,
        img: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Animal_kingdom_nzwbda.jpg',
        title: "¡LLEGO EL VERANO!",
        desc: "AMIGURUMIS DE VERANO HASTA CON 50% DE DESCUENTO",
        bg: "f5fafd",
    },
    {
        id: 2,
        img: "https://i.ibb.co/DG69bQ4/2.png",
        title: "AUTUMN COLLECTION",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "fcf1ed",
    },
    {
        id: 3,
        img: "https://i.ibb.co/cXFnLLV/3.png",
        title: "LOUNGEWEAR LOVE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "fbf0f4",
    },
];

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <div className="hidden md:block w-full h-screen flex relative overflow-hidden bg-pastelPink">
            <div onClick={() => handleClick("left")} className="flex w-10 h-10 absolute bg-gray-500 hover:bg-black top-0 bottom-0 left-3 m-auto z-10 justify-center text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition">
                <ArrowLeft />
            </div>
            <div className={`h-full flex`}>
                <ImageAction key={sliderItems[slideIndex].id} src={sliderItems[slideIndex].img} title={sliderItems[slideIndex].title} description={sliderItems[slideIndex].desc} button={"COMPRAR YA"}/>
            </div>
            <div onClick={() => handleClick("right")} className="flex w-10 h-10 absolute bg-gray-500 hover:bg-black top-0 bottom-0 right-3 m-auto z-10 justify-center text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition">
                <ArrowRight />
            </div>
        </div>
    );
};

export default Slider;