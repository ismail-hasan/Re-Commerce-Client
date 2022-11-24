import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authProvider } from '../AuthContext/AuthContext';

const PrivetRouter = ({ children }) => {
    const { user } = useContext(authProvider)
    const location = useLocation()
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children

};

export default PrivetRouter;