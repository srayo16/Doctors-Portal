import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import UseAdmin from '../../Hook/UseAdmin';
import { signOut } from 'firebase/auth';
import Spinners from '../Shared/Spinners';

const RequireAdmin = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = UseAdmin(user);
    let location = useLocation();

    if (loading || adminLoading) {
        return <Spinners></Spinners>
    }

    if (!user || !admin) {
        signOut(auth);
        localStorage.removeItem('AccessToken');
        return <Navigate to="/login" state={{ from: location }} replace />;
    }


    return children;

};

export default RequireAdmin;