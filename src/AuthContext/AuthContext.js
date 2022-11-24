import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../FireBase/Firebase.init';


export const authProvider = createContext()
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOut = () => {
        return signOut(auth)
    }

    const userProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currenUser => {
            console.log('curren user is ', currenUser)
            setUser(currenUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])


    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        LogOut,
        userProfile
    }

    return (
        <authProvider.Provider value={userInfo}>
            {children}
        </authProvider.Provider>
    );
};

export default AuthContext;