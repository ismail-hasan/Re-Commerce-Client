import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../FireBase/Firebase.init';
import CatagoryList from '../Component/CatagoryPage/CatagoryList';


export const authProvider = createContext()
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()


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


    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currenUser => {
            setUser(currenUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    //

    // const [userVarify, setUserVarify] = useState([])

    // useEffect(() => {
    //     fetch(`http://localhost:5000/allusers`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setUserVarify(data)
    //         })
    // }, [])
    // console.log("context", userVarify);


    //
    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        LogOut,
        userProfile,
        googleSignIn,


    }

    return (
        <authProvider.Provider value={userInfo}>
            {children}
        </authProvider.Provider>
    );
};

export default AuthContext;