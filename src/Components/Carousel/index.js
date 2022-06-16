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
    <section className="position-relative height-80 flex justify-center items-center">
        <FaArrowAltCircleLeft className="text-rose-500 w-24 h-24 ml-20" onClick={prevSlide}/>
    {imagenes.map((slide,index)=>{
        return(
            <div className={index===current ? 'slide active' : 'slide'} key={index}>
                {index===current && (<img src={slide.image} alt="imagen" className='w-5/6 h-2/5 ml-20 rounded-md'/>)}
            </div>
        ) 
        
        
    })}
    
    <FaArrowAltCircleRight className="text-rose-500 w-24 h-24 mr-40" onClick={nextSlide}/>
    </section>

);
}
export default Carousel;