import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spinners from '../Shared/Spinners';

const CheckoutForm = ({ appointment }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [cardSuccess, setCardSuccess] = useState("");
    const [clientTransId, setClientTransId] = useState("");
    const [procceing, setProcceing] = useState(false);

    const { price, names, treatment, _id, email } = appointment;

    useEffect(() => {
        fetch("https://doctor-portal-server-nekx.onrender.com/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `bearer ${localStorage.getItem('AccessToken')}`
            },
            body: JSON.stringify({ price })

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                    // toast('okay!');

                }
            });
    }, [price]);

    // if (procceing) {
    //     return <Spinners></Spinners>
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const card = elements.getElement(CardElement);
        if (elements == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');
        setCardSuccess('');
        setProcceing(true);
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: names,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcceing(false);
        }
        else {
            setCardError('');
            // console.log(paymentIntent);
            setClientTransId(paymentIntent.id);
            setCardSuccess('Congrats! Your payment is completed.');

            const payment = {
                appointmentId: _id,
                transactionId: paymentIntent.id

            }

            fetch(`https://doctor-portal-server-nekx.onrender.com/booking/${_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `bearer ${localStorage.getItem('AccessToken')}`
                },
                body: JSON.stringify(payment)

            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {

                        // console.log(data);
                        setProcceing(false);
                    }
                })

        }

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }} />
                <button className="btn btn-success btn-xs sm:btn-sm md:btn-md lg:btn-md my-5" type="submit" disabled={!stripe || !elements || !clientSecret || cardSuccess}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                cardSuccess && <div>
                    <p className='text-green-500'>{cardSuccess}</p>
                    <p className='text-orange-500'>Your transaction Id: {clientTransId}</p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;