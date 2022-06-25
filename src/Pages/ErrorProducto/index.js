import Logo from "../../Components/Logo";
import Footer from "../../Components/Footer";
import {useNavigate} from 'react-router-dom';


function ErrorProducto(){
    const navigate=useNavigate();
    const navigateBack=()=>{
        navigate('/home');
    }

    return(
        <div className="bg-rose-100/40">
        <div className="flex justify-start pl-10">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <span onClick={navigateBack} className="pl-10 mt-10 text-rose-600 cursor-pointer material-symbols-outlined">arrow_back</span>
            <Logo/>
        </div>

        <div className="text-rose-500 text-3xl flex justify-center pt-20">
          Su producto no se ha logrado añadir de manera exitosa
        </div>

        <div className="text-rose-500  pt-80 text-center">
            <Footer/>
        </div>




    </div>
    );
}
export default ErrorProducto;