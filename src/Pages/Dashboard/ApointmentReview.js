import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Spinners from '../Shared/Spinners';

const ApointmentReview = () => {
    const [user, loading] = useAuthState(auth);
    const [userAppointment, setUserAppointment] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?email=${user.email}`, {
                method: "GET",
                headers: {
                    "authorization": `bearer ${localStorage.getItem('AccessToken')}`
                }
            })
                .then(res => {
                    // console.log(res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('AccessToken');
                        navigate('/');
                    }
                    else {

                        return res.json()
                    }
                })
                .then(data => setUserAppointment(data))
        }
    }, [user, navigate])

    if (loading) {
        return <Spinners></Spinners>
    }
    let count = 1;
    return (
        <div>
            <h1>This is appointment review: {userAppointment?.length}</h1>
            <div className="container mx-auto overflow-hidden">
                <table className="table w-44  lg:w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userAppointment?.map((appo, index) => <tr key={index}>
                                <th>{count++}</th>
                                <td>{appo.names}</td>
                                <td>{appo.date}</td>
                                <td>{appo.slots}</td>
                                <td>{appo.treatment}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApointmentReview;