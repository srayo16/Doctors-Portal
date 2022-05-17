import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Firebase.init';

const UseAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const email = user?.email;
        fetch(`http://localhost:5000/admin/${email}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('AccessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {

                setAdmin(data.admin);
                setAdminLoading(false);


            })
    }, [navigate, user?.email])

    return [admin];
};

export default UseAdmin;