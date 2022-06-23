import Logo from "../../Components/Logo";
import Footer from "../../Components/Footer";
import {useNavigate} from 'react-router-dom';

function LogIn() {
    const navigate=useNavigate();

    const navigateBack=()=>{
        navigate('/home');
    }

    return (
        <div className="selection:bg-rose-500 selection:text-white bg-rose-100/40">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <span onClick={navigateBack} class="pl-10 mt-10 text-rose-600 cursor-pointer material-symbols-outlined">arrow_back</span>
            <div className="min-h-screen flex justify-center items-center">
                <div className="p-8 flex-1">
                    <div className="w-80 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
                        <div className="relative h-48 bg-rose-500 rounded-bl-4xl">
                            <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 1440 320">
                                <path fill="#ffffff"
                                      d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            </svg>
                        </div>
                        <div className="max-w-md w-full mx-auto">
                            <div className="mb-4 flex justify-center">
                                <Logo/>
                            </div>
                            <div className="text-center font-medium text-xl">Ingrese su información</div>
                        </div>
                        <div className="px-4 pb-8 bg-white rounded-tr-4xl">
                            <div className="mt-8">
                                <form action="" className="space-y-4">
                                    <div>
                                        <input type="email" className="w-full p-2 border-b-2 border-gray-300 rounded mt-1"
                                               placeholder="Correo"/>
                                    </div>
                                    <div>
                                        <input type="password"
                                               className="w-full p-2 border-b-2 border-gray-300 rounded mt-1"
                                               placeholder="Contraseña"/>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <a href="" className="font-medium text-small text-rose-500 block">¿Olvidó su
                                            contraseña?</a>
                                    </div>
                                    <div>
                                        <button
                                            className="w-full py-2 px-4 bg-rose-600 hover:blue-700 rounded-md text-white text-sm">Ingresar
                                        </button>
                                    </div>
                                </form>
                            </div>
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

export default LogIn;