import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinners from '../Shared/Spinners';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1J48LANp4ALWIINqOXqb6zamLOHcWa5yyBnGNbEUli5GECDYF4pgHzfh7oERUS43U3GEaOwvJYZ93fUvA2mQY300oWbVZJTw');
const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const { isLoading, error, data: appointment } = useQuery(['booking', id], () =>
        fetch(url, {
            method: "GET",
            headers: {
                "authorization": `bearer ${localStorage.getItem('AccessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Spinners></Spinners>
    }
    // console.log(appointment);
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {appointment?.names}</p>
                    <h2 className="card-title">Please Pay for {appointment?.treatment}</h2>
                    <p>Your Appointment: <span className='text-orange-700'>{appointment?.date}</span> at {appointment?.slot}</p>
                    <p>Please pay: ${appointment?.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    {/* <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment} />
                </Elements> */}
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;