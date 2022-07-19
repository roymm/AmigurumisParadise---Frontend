import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {Navigate, useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";

import Logo from "../../Components/Logo";
import Footer from "../../Components/Footer";
import {authActions} from "../../Slices/authSlice";


function LogIn() {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch();
    const authUser = useSelector(x => x.auth.user);

    const onSubmit = async (formData) => {
        try {
            const email = formData.email;
            const password = formData.password;
            const response = await dispatch(authActions.login({email, password}));
            console.log(response.payload.error);
            if (!response.payload.error) {
                navigate("/home",{
                    state: {
                        message: "Inicio de sesión exitoso"
                    }
                });
            } else {
                toast.error("Error de autenticación");
            }
        } catch (e) {
            console.log(e);
        }
    }

    return authUser ? (<Navigate to="/"/>) : (<div>
            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
            <div className="min-h-screen flex justify-center items-center">
                <div className="p-8 flex-1">
                    <div className="w-80 bg-white mx-auto overflow-hidden shadow-xl">
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
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    <div>
                                        <input type="email" name="email"
                                               {...register("email", {
                                                   required: {value: true, message: "Campo requerido"},
                                                   pattern: {value: /^\S+@\S+$/i, message: "Formato invalido"}
                                               })}
                                               className={`w-full p-2 border-b-2 ${errors.email ? "border-red-700" : "border-gray-300"} rounded mt-1`}
                                               placeholder="Correo"/>
                                        {errors.email && <p className={`m-1 text-red-700`}>{errors.email.message}</p>}
                                    </div>
                                    <div>
                                        <input type="password"
                                               name="password"
                                               {...register("password", {
                                                   required: {value: true, message: "Campo requerido"},
                                                   minLength: {value: 2, message: "Mínimo 8 caracteres"}
                                               })}
                                               className="w-full p-2 border-b-2 border-gray-300 rounded mt-1"
                                               placeholder="Contraseña"/>
                                        {errors.password &&
                                            <p className={`m-1 text-red-700`}>{errors.password.message}</p>}
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <a href="" className="font-medium text-small text-rose-500 block">¿Olvidó su
                                            contraseña?</a>
                                    </div>
                                    <div>
                                        <input
                                            type="submit"
                                            className="w-full py-2 px-4 bg-rose-600 hover:blue-700 rounded-md text-white text-sm"
                                            value="Ingresar"/>
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
            <ToastContainer/>
        </div>

    )
}

export default LogIn;