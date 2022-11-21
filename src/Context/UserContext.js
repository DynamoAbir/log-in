import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../component/Firebase/firebase.congif';

export const AuthContext=createContext();

const auth=getAuth(app);

 const UserContext = ({children}) => {
    const [user, setUser]= useState({DisplayName:'Aakash'});

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const authInfo={user, createUser , signIn}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>

        
    );
};

export default UserContext;