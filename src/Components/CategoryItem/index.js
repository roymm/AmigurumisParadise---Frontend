const CategoryItem = (props) =>{
    return(
        <div className={`flex m-1 h-screen relative flex-row`}>
            <img className={`w-full h-full object-cover`} src={props.src} alt=""/>
            <div className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center`}>
                <h1 className={`font-bold text-xl text-white mb-5`}>{props.title}</h1>
                <button className={`border-none p-2 bg-pastelYellow hover:shadow`}>{props.button}</button>
            </div>
        </div>
    )

}

export default CategoryItem;