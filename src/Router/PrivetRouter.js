import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authProvider } from '../AuthContext/AuthContext';
import Loder from '../Component/Loder';

const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(authProvider)
    const location = useLocation()
    if (loading) {
        return <Loder></Loder>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children

};

export default PrivetRouter;