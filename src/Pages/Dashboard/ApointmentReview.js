import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Spinners from '../Shared/Spinners';

const ApointmentReview = () => {
    const [user, loading] = useAuthState(auth);
    const [userAppointment, setUserAppointment] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://evening-dawn-51608.herokuapp.com/booking?email=${user.email}`, {
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
                <table className="table w-55  lg:w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Process</th>
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
                                <td>

                                    {(appo.price && !appo?.paid) && <Link to={`/dashboard/payment/${appo._id}`}><button className="btn btn-success">Pay</button></Link>}

                                    {(appo.price && appo.paid) && <div>
                                        <p><span className='text-green-500'>Paid</span></p>
                                        <p>Transaction id: <span className='text-orange-500'>{appo.transactionId}</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApointmentReview;