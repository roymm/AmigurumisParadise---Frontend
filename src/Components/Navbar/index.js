import SearchBar from "../SearchBar";
import {Badge} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import LogInSection from "./LogInSection";
import MenuButton from "../MenuButton";
import {authActions} from "../../Slices/authSlice";
import { ToastContainer, toast } from 'react-toastify';
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const Navbar = () => {
    const userIsLoggedIn = useSelector((state) => state.auth.userIsLoggedIn);
    const dispatch = useDispatch();
    const location = useLocation();

    const handleLogOut = () => {
        dispatch(authActions.logout());
        toast("Cierre de sesión exitoso");
    }

    useEffect(()=>{
        if(location.state && location.state.message){
            toast(location.state.message);
            window.history.replaceState({}, document.title)
        }
    },[])

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
                        {userIsLoggedIn ?
                            <MenuButton action={handleLogOut}>Salir</MenuButton> :
                            <LogInSection/>
                        }
                        <button className="ml-6 ml-1 md:ml-4 lg:ml-6 cursor-pointer text-xs md:text-base">
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlinedIcon/>
                            </Badge>
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default Navbar;