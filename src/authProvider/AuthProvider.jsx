import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const createEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser("");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [currentUser]);

  const logOut = () => {
    return signOut(auth);
  };

  const infoData = {
    createEmailPassword,
    loginEmailPassword,
    currentUser,
    isLoading,
    logOut,
  };

  return (
    <authContext.Provider value={infoData}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
