import lion from "../../ProductImages/lion.jpeg";

const CartItem = ()=>{
    return(
            <div id={`product`} className={`flex justify-between flex-col md:flex-row py-5`}>
                <div id={`productDetail`} className={`flex w-2/3`}>
                    <img src={lion} className={`w-40`} alt={``}/>
                    <div id={`details`} className={`p-5 flex flex-col justify-around`}>
                        <span><b>Nombre: </b>Leon</span>
                        <span><b>ID: </b>46516163</span>
                    </div>
                </div>
                <div id={`priceDetails`} className={`flex w-1/3 items-center content-center`}>
                    <div id={`productPrice`} className={`text-xl font-bold pt-4 md:pt-0`}>USD 6654</div>
                </div>
            </div>
    )
}

export default CartItem;