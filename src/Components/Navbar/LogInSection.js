import MenuButton from "../MenuButton";
import {useNavigate} from "react-router-dom";

const LogInSection = () => {
    const navigator = useNavigate();
    const handleLogin = ()=> navigator('/login');
    const handleRegister = ()=> navigator('/registro');


    return (
        <>
            <MenuButton action={handleLogin}>Ingresar</MenuButton>
            <MenuButton action={handleRegister}>Registrarse</MenuButton>
        </>
    )
}

export default LogInSection;