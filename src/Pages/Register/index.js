import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";

import {authActions} from "../../Slices/authSlice";
import {toast} from "react-toastify";

function Register() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (formData) => {
        try {
            const response = await dispatch(authActions.register(formData));
            if (!response.payload.error) {
                navigate("/inicio");
            } else {
                toast.error("Error al crear un nuevo usuario");
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (

        <div className="min-h-80 flex justify-center items-center">
                <div className="w-80 pt-6 bg-white mx-auto overflow-hidden shadow-xl">
                    <div className="max-w-md w-full mx-auto">
                        <div className="text-center font-bold font-medium text-3xl">Crear una cuenta</div>
                        <div className="text-center font-medium text-xl">¡Registrarse es muy fácil!</div>
                    </div>
                    <div className="px-4 pb-8 bg-white rounded-tr-4xl">
                        <div className="mt-8">
                            <form method="POST" onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                                <div>
                                    <input type="text"
                                           name="name"
                                           {...register("name", {
                                               required: {value: true, message: "Campo requerido"},
                                               maxLength: {value: 80, message: "80 caracteres máximo"}
                                           })}
                                           className="w-full p-2 border-b-2 border-gray-300 rounded mt-1"
                                           placeholder="Nombre"/>
                                    {errors.name && <p className={`m-1 text-red-700`}>{errors.name.message}</p>}
                                </div>
                                <div>
                                    <input type="text"
                                           name="last_name"
                                           {...register("last_name", {
                                               required: {value: true, message: "Campo requerido"},
                                               maxLength: {value: 80, message: "80 caracteres máximo"}
                                           })}
                                           className="w-full p-2 border-b-2 border-gray-300 rounded mt-1"
                                           placeholder="Apellido"/>
                                    {errors.last_name && <p className={`m-1 text-red-700`}>{errors.last_name.message}</p>}
                                </div>
                                <div>
                                    <input type="email"
                                           name="email"
                                           {...register("email", {
                                               required: {value: true, message: "Campo requerido"},
                                               pattern: {value: /^\S+@\S+$/i, message: "Formato invalido"}
                                           })}
                                           className="w-full p-2 border-b-2 border-gray-300 rounded mt-1"
                                           placeholder="Correo"/>
                                    {errors.email && <p className={`m-1 text-red-700`}>{errors.email.message}</p>}
                                </div>
                                <div>
                                    <input type="password"
                                           {...register("password", {
                                               required: {value: true, message:"Campo requerido"},
                                               minLength:{value: 8, message:"Largo de 8 míninmo"}
                                           })}
                                           className="w-full p-2 border-b-2 border-gray-300 rounded mt-1"
                                           placeholder="Contraseña"/>
                                    {errors.password && <p className={`m-1 text-red-700`}>{errors.password.message}</p>}
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
    )
}

export default Register;