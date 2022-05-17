import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Spinners from '../Shared/Spinners';
import UserRow from './UserRow';

const Users = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        fetch("http://localhost:5000/user", {
            method: "GET",
            headers: {
                authorization: `bearer ${localStorage.getItem('AccessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('AccessToken');
                    navigate('/');
                }
                else {

                    res.json()
                }
            })
            .then(data => setUsers(data))

    }, [navigate]
    )

    if (users?.length <= 0) {
        return <Spinners></Spinners>
    }



    return (
        <div>
            <h1>This is Users List: {users?.length}</h1>
            <div className="container mx-auto overflow-hidden">
                <table className="table w-44  lg:w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => <UserRow key={user._id} user={user}></UserRow>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;