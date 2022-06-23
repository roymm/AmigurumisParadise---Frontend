import { ListItemSecondaryAction } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import Footer from "../../Components/Footer";

function Register() {
    const navigate=useNavigate();
    const navigateBack=()=>{
        navigate('/home');
    }

    return (


        <div className="min-h-screen bg-rose-100/40">
            <div className="">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <span onClick={navigateBack} class="flex justify-start items-start pl-10 mt-10 text-rose-600 cursor-pointer material-symbols-outlined">arrow_back</span>

            </div>
         
            <div className="p-8 flex-1">
                <div className="w-80 pt-6 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
                    <div className="max-w-md w-full mx-auto">
                        <div className="text-center font-bold font-medium text-3xl">Crear una cuenta</div>
                        <div className="text-center font-medium text-xl">¡Registrarse es muy fácil!</div>
                    </div>
                    <div className="px-4 pb-8 bg-white rounded-tr-4xl">
                        <div className="mt-8">
                            <form method="POST" action="/registerUser" className="space-y-2">
                                <div>
                                    <input type="email" name="email" className="w-full p-2 border-b-2 border-gray-300 rounded mt-1"
                                           placeholder="Correo"/>
                                </div>
                                <div>
                                    <input type="password"
                                           className="w-full p-2 border-b-2 border-gray-300 rounded mt-1"
                                           placeholder="Contraseña"/>
                                </div>
                                <div>
                                    <input type="password"
                                           className="w-full p-2 border-b-2 border-gray-300 rounded mt-1"
                                           placeholder="Confirmar contraseña"/>
                                </div>
                                <div>
                                    <button
                                        className="w-full mt-4 py-2 px-4 bg-rose-500 hover:bg-rose-400 text-white font-semibold rounded-md text-white text-sm">Ingresar</button>
                                </div>
                            </form>

                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-rose-500 pt-20 text-center">
            <Footer/>
            </div>
        </div>
    )
}

export default Register;