import { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('')

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  return (
    <div className="w-full min-h-screen bg-slate-100 flex">
        <div className="w-full md:w-2/4 py-12 bg-white px-12 sm:px-32 md:px-10 lg:px-20 xl:px-32 flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center gap-4 mb-5">
                <div className=''>
                    <span><i className="fa-solid fa-mobile"></i></span>
                    <span className='ml-2 text-xl font-semibold italic'>MobileMend</span>
                </div>
                <h1 className='text-6xl'>!Bienvenido!</h1>
                <p className='text-gray-500'>Por favor, introduzca sus datos</p>
                <button className='w-full bg-white border-2 flex justify-center rounded-sm py-2'>
                    <img src="../../public/googleIcon.svg" className='w-6' alt="" />
                </button>
            </div>
            
            <div className="divider">
                <span className="dividerText">or</span>
            </div>
            
            <div className="mb-4 mt-5">
                <label htmlFor="username" className="block text-gray-950 text-sm font-bold mb-2">Correo o Usuario</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    className="shadow appearance-none border-2 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    required 
                />
            </div>
        
            <div className="mb-6">
                <label htmlFor="password" className='block text-gray-950 text-sm font-bold mb-2'>Contraseña</label>
                <div className="relative">
                    <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow appearance-none border-2  rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                    />
                   <button
                    className="absolute inset-y-0 right-0 px-3 py-2"
                    onClick={togglePasswordVisibility}
                    >
                    {showPassword ? (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 z-50"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                        </svg>
                    ) : (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        </svg>
                    )}
                    </button>

                </div>
            </div>

            <div className="mb-2 flex items-center justify-between">
                <label className="decoration-gray-950 font-bold text-sm text-gray-950 hover:text-gray-500">
                    <input type="checkbox" className="mr-2 leading-tight cursor-pointer" />
                    Recordarme
                </label>
                <a href="#" className="decoration-gray-950 font-bold text-sm text-gray-950 hover:text-gray-500">
                    Olvidé mi contraseña
                </a>
            </div>
            <Link to={'/registro'} className='mb-4 flex justify-start cursor-pointer decoration-gray-950 font-bold text-sm text-gray-950 hover:text-gray-500'>Registrate aquí</Link>
            <button 
            type="submit" 
            className="bg-gray-950 hover:hoverbg transition text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
            >
            Iniciar sesión
            </button>

        </div>
        <div className="w-2/4 hidden md:block background"></div>
    </div>
)


}
