import {useForm} from "react-hook-form";

function Register() {
    const {register, handleSubmit} = useForm();

    return (

        <div className="min-h-80 flex justify-center items-center">
                <div className="w-80 pt-6 bg-white mx-auto overflow-hidden shadow-xl">
                    <div className="max-w-md w-full mx-auto">
                        <div className="text-center font-bold font-medium text-3xl">Crear una cuenta</div>
                        <div className="text-center font-medium text-xl">¡Registrarse es muy fácil!</div>
                    </div>
                    <div className="px-4 pb-8 bg-white rounded-tr-4xl">
                        <div className="mt-8">
                            <form method="POST" action="/registerUser" className="space-y-2">
                                <div>
                                    <input type="text"
                                           name="name"
                                           {...register("name", {
                                               required: true, maxLength: 80
                                           })}
                                           className="w-full p-2 border-b-2 border-gray-300 rounded mt-1"
                                           placeholder="Nombre"/>
                                </div>
                                <div>
                                    <input type="text"
                                           name="last_name"
                                           {...register("last_name", {
                                               required: true, maxLength: 80
                                           })}
                                           className="w-full p-2 border-b-2 border-gray-300 rounded mt-1"
                                           placeholder="Apellido"/>
                                </div>
                                <div>
                                    <input type="email"
                                           name="email"
                                           {...register("email", {
                                               required: true, pattern: /^\S+@\S+$/i
                                           })}
                                           className="w-full p-2 border-b-2 border-gray-300 rounded mt-1"
                                           placeholder="Correo"/>
                                </div>
                                <div>
                                    <input type="password"
                                           {...register("password", {
                                               required: true, maxLength: 80
                                           })}
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
    )
}

export default Register;