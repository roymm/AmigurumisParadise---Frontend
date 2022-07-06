import SearchBar from "../SearchBar";
import {Badge, MenuItem} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Navbar = () => {
    return (
        <>
            <div className="h-10 md:h-14 lg:h-16 bg-pastelLightPink items-center justify-center">
                <div className="px-4 py-4 flex items-center justify-center">
                    <div className="flex-2 items-start items-center">
                        <button
                            className="bg-transparent text-xs md:text-base lg:text-2xl font-extrabold tracking-widest font-DancingScript">
                            Amigurumi Paradise
                        </button>
                    </div>
                    <div className="flex-1 items-center mx-4 md:mx-16">
                        <SearchBar/>
                    </div>
                    <div className="flex-2 flex items-center justify-end">
                        <button
                            className="p-1 ml-1 md:ml-4 lg:ml-6 cursor-pointer text-xs md:text-base hover:bg-pastelPink transition duration-300 rounded">Registrarse
                        </button>
                        <button
                            className="p-1 ml-1 md:ml-4 lg:ml-6 cursor-pointer text-xs md:text-base hover:bg-pastelPink transition duration-300 rounded">Ingresar
                        </button>
                        <button className="ml-6 ml-1 md:ml-4 lg:ml-6 cursor-pointer text-xs md:text-base">
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlinedIcon/>
                            </Badge>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;