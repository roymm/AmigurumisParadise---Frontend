import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import {useState} from 'react';

//imagenes que se usan en el carousel
export const imagenes=[
    {
    image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/90/media/disneyparks_v0100/1/media/mediaplayer/homepage/mickey-minnie-16x9.jpg'
},
{
    image:'https://www.nacionrex.com/__export/1622933549643/sites/debate/img/2021/06/05/bts-donde-viven-2021_crop1622931060976.jpg_1902800913.jpg'
},
{
    image:'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Animal_kingdom_nzwbda.jpg'
}

]

function Carousel(){
    const [current, setCurrent]=useState(0);
    const length=imagenes.length;

    //se mueve a sig imagen
    const nextSlide=()=>{
        setCurrent(current===length-1 ? 0 : current+1)
    };

    //se mueve a imagen anterior
    const prevSlide=()=>{
        setCurrent(current===0 ? length-1 : current-1)
    };

    if(!Array.isArray(imagenes)|| imagenes.length<=0){
        return null;
    }


return(
    //carousel
    <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
    {imagenes.map((slide,index)=>{
        return(
            <div className={index===current ? 'slide active' : 'slide'} key={index}>
                {index===current && (<img src={slide.image} alt="imagen" className='image'/>)}
            </div>
        ) 
        
        
    })}
    </section>

);
}
export default Carousel;