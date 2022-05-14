import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Spinners from '../Shared/Spinners';

const ApointmentReview = () => {
    const [user, loading] = useAuthState(auth);
    const [userAppointment, setUserAppointment] = useState();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?email=${user.email}`)
                .then(res => res.json())
                .then(data => setUserAppointment(data))
        }
    }, [user])

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