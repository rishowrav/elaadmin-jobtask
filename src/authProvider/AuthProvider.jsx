import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  // Register authencation
  const createEmailPassword = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login authentication
  const loginEmailPassword = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setIsLoading(false);
      } else {
        setCurrentUser("");
        setIsLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [currentUser]);

  // Logout
  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  // Login with Google
  const googleLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };

  const infoData = {
    createEmailPassword,
    loginEmailPassword,
    currentUser,
    isLoading,
    logOut,
    googleLogin,
  };

  return (
    <authContext.Provider value={infoData}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
