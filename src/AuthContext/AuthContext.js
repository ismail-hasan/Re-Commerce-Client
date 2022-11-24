import React, { createContext } from 'react';


export const authProvider = createContext()
const AuthContext = ({ children }) => {
    
    const userInfo = { name: "ismail hasan" }

    return (
        <authProvider.Provider value={userInfo}>
            {children}
        </authProvider.Provider>
    );
};

export default AuthContext;