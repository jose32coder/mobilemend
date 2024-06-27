import { auth, db, createUserWithEmailAndPassword, doc, setDoc } from './config.js';

const registerUser = async (email, password, firstName, lastName, telephone) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, 'singUp', user.uid), {
      email: email,
      last_name: lastName,
      name: firstName,
      number: telephone,
      password: password,
    });

    return user;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export { registerUser };
