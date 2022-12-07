import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';

const UserRow = ({ user, refetch, index }) => {
    ;
    const navigate = useNavigate();
    const makeAdmin = () => {

        fetch(`https://doctor-portal-server-nekx.onrender.com/user/admin/${user.email}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('AccessToken')}`
            }

        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('AccessToken');
                    navigate('/');
                    toast.error('error!');
                }
                else {

                    return res.json()
                }
            })
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    toast.success('Made Admin');
                    refetch();
                }

            })
    }




    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user?.email}</td>
            <td>{user?.role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Admin</button>}</td>
            <td><button className="btn btn-xs">Remove</button></td>
        </tr>
    );
};

export default UserRow;