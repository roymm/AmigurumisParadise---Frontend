const ProductCard = ({productData}) => {
    return (
        <>
        <div
            className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden shadow-xl group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img src={productData.picture}
                 className="w-full h-full object-center object-cover lg:w-full lg:h-full" alt="">

            </img>
        </div>
        <div className="mt-4">
            <div>
                <h3 className="text-lg text-gray-900">
                    <a href="#">
                        <span aria-hidden="true" className="absolute inset-0"></span>
                        {productData.name}
                    </a>
                </h3>
            </div>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <p className="text-lg font-medium text-gray-700 font-bold">USD {productData.price}</p>
        </div>
</>
)
}

export default ProductCard;