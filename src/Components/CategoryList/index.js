import CategoryItem from "../CategoryItem"

const CategoryList = () =>{
    const categories = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            title: "AMIGURUMIS DE SANRIO",
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            title: "AMIGURUMIS DE BTS",
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            title: "AMIGURUMIS DE ANIMALES",
        },
    ];

    return(
        <div className={`flex p-5 justify-between flex-col md:flex-row`}>
            {categories.map((item) => (
                <CategoryItem title={item.title} src={item.img} button={"COMPRAR YA"} key={item.id} />
            ))}
        </div>
    )
}

export default CategoryList;