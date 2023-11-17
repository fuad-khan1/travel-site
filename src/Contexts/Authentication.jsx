import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const Authentication = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singout = () => {
    return signOut(auth);
  };

  useEffect(() => {
   const unsub= onAuthStateChanged(auth, (currentUser) => {
     
      setUser(currentUser)
    });

    return ()=>{
        return unsub()
    }
  }, []);

  const info = {
    user,
    createUser,
    signin,
    singout,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default Authentication;
