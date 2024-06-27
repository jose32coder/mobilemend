import { auth, db, createUserWithEmailAndPassword, doc, setDoc} from './config.js'; // Importa tu configuración de Firebase

const registerUser = async (email, password, firstName, lastName, telephone) => {
  try {
    // Registrar usuario con correo y contraseña
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Guardar datos adicionales en Firestore
    await setDoc(doc(db, 'sing_up', user.uid), {
      email: email,
      last_name: lastName,
      name: firstName,
      number: telephone,
      password: password,
    });

    // Retornar el usuario registrado
    return user;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export { registerUser };

