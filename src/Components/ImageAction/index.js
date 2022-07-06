const ImageAction = (props) =>{
    return(
        <div className={`w-screen h-screen flex items-center`}>
            <div className={`h-full flex-1 mt-16`}>
                <img src={props.src} alt=""/>
            </div>
            <div className={`flex-1 p-14`}>
                <h1 className={`text-2xl md:text-4xl lg:text-6xl font-extrabold`}>{props.title}</h1>
                <p className={`my-12 text-lg lg:text-xl font-bold`}>{props.description}</p>
                <button className={`p-3 cursor-pointer bg-pastelYellow hover:shadow`}>{props.button}</button>
            </div>
        </div>
    )
}

export default ImageAction;