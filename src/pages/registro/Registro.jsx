import { useState } from "react";
import "./registro.css";
import { registerUser } from "../../firebase/register.js"; // Asegúrate de importar la función de registro
import { auth, db, doc, googleProvider, signInWithPopup, setDoc, getDoc } from "../../firebase/config.js";

export const Registro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const handleRegistro = async (e) => {
    e.preventDefault();

    try {
      // Llamar a la función de registro con todos los datos
      const user = await registerUser(
        email,
        password,
        firstName,
        lastName,
        telephone
      );

      // Éxito en el registro
      console.log("Usuario registrado correctamente:", user);

      // Aquí podrías redirigir al usuario a otra página o mostrar un mensaje de éxito
      setSuccessMessage('Usuario registrado correctamente');
    } catch (error) {
        // Manejo de errores específicos
        if (error.code === 'auth/email-already-in-use') {
          setErrorMessage("El correo electrónico ya está en uso");
        } else {
          setErrorMessage("Error durante el registro: " + error.message);
        } 
    }
  };

//   nueva funcion para iniciar con google

const handleGoogleSignIn = async () => {
    try {
        
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Verificar si el usuario ya existe en Firestore
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        // Si el usuario no existe, crear un nuevo documento en Firestore
        await setDoc(userDocRef, {
          firstName: user.displayName.split(" ")[0],
          lastName: user.displayName.split(" ")[1],
          email: user.email,
          telephone: '', // Puedes pedir al usuario que complete esta información después
        });
      }

      setSuccessMessage('Usuario autenticado con Google');
    } catch (error) {
      console.error("Error durante la autenticación con Google:", error);
      setErrorMessage("Error durante la autenticación con Google: " + error.message);
    }
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <form action="" onSubmit={handleRegistro}>
      <div className="w-full min-h-screen bg-slate-100 flex">
        <div className="w-2/4 hidden md:block background"></div>
        <div className="w-full md:w-2/4 bg-white px-12 sm:px-20 md:px-10 lg:px-20 xl:px-25 flex flex-col justify-center">
          <div className="flex flex-col items-center justify-center gap-4 mb-5">
            <div className="">
              <span>
                <i className="fa-solid fa-mobile"></i>
              </span>
              <span className="ml-2 text-xl font-semibold italic">
                MobileMend
              </span>
            </div>
            <h1 className="text-6xl">!Bienvenido!</h1>
            <p className="text-gray-500 text-sm sm:text-md">
              Por favor, registrate a continuación:
            </p>

            <button
              type="button"
              className="w-full bg-white border-2 flex justify-center rounded-sm py-2"
              onClick={handleGoogleSignIn} //uso de la nueva funcion de incio de secion con google
            >
              <img src="../../public/googleIcon.svg" className="w-6" alt="" />
            </button>

          </div>

          <div className="divider">
            <span className="dividerText">or</span>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row sm:gap-2 md:flex-row md:gap-2 lg:flex-row lg:gap-2 xl:flex-row xl:space-4">
            <div className="flex-1">
              <label
                htmlFor="firstName"
                className="block text-gray-950 text-sm font-bold my-1"
              >
                Nombre
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="shadow appearance-none border-2 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="lastName"
                className="block text-gray-950 text-sm font-bold my-1"
              >
                Apellido
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="shadow appearance-none border-2 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-2 sm:mt-5 flex flex-col sm:flex-row sm:gap-2 md:flex-row md:gap-2 lg:flex-row lg:gap-2 xl:flex-row xl:space-4">
            <div className="flex-1">
              <label
                htmlFor="email"
                className="block text-gray-950 text-sm font-bold my-1"
              >
                Correo
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="shadow appearance-none border-2 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="telephone"
                className="block text-gray-950 text-sm font-bold my-1"
              >
                Teléfono
              </label>
              <input
                type="text"
                id="telephone"
                name="telephone"
                className="shadow appearance-none border-2 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-2 sm:mb-5 flex flex-col gap">
            <label
              htmlFor="password"
              className="block text-gray-950 text-sm font-bold mb-2"
            >
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
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
          <div className="mt-2 sm:mb-5 mb-6 flex flex-col gap">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-950 text-sm font-bold mb-2"
            >
              Confirmar contraseña
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="shadow appearance-none border-2  rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              <span
                className="absolute inset-y-0 right-0 px-3 py-2"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
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
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="bg-gray-950 hover:hoverbg transition text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
          >
            Iniciar sesión
          </button>
          <div className="text-red-500">{errorMessage}</div>
          <div className="text-green-700">{successMessage}</div>
        </div>
      </div>
    </form>
  );
};
