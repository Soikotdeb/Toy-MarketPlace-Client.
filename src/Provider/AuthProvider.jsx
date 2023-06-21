import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../Firebase/Firebase.config';


export const AuthContext = createContext(null)
const auth =getAuth(app);

 const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading]=useState(true);

    
    const createUser= (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password);
    }

    const SignInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
 const logOut = () =>{
    return signOut(auth)
 }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
             setUser(loggedUser);
             setLoading(false);
     
         })
         return ()=>{
         unsubscribe()
         }
     },[])

  
     


     
    const AuthInfo = {
        user ,
        loading,
        createUser,
        SignInUser,
        logOut,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>

    );
};

export default AuthProvider;