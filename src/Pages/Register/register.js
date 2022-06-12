function Register() {
    return (
        <div className="min-h-screen bg-rose-100 flex justify-center items-center">
            <div className="p-8 flex-1">
                <div className="w-80 pt-6 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
                    <div className="max-w-md w-full mx-auto">
                        <div className="text-center font-bold font-medium text-3xl">Crear una cuenta</div>
                        <div className="text-center font-medium text-xl">¡Registrarse es muy fàcil!</div>
                    </div>
                    <div className="px-4 pb-8 bg-white rounded-tr-4xl">
                        <div className="mt-8">
                            <form action="" className="space-y-2">
                                <div>
                                    <input type="email" className="w-full p-2 border-b-2 border-gray-300 rounded mt-1"
                                           placeholder="Email"/>
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
        </div>
    )
}

export default Register;