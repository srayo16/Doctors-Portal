import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';

const Modal = ({ treatment, date, setTreatment, refetch }) => {
    // console.log(treatment);
    const { name, slots, _id, price } = treatment;
    const [user, loading, error] = useAuthState(auth);

    const submitForm = event => {
        event.preventDefault();
        const takeData = {

            treatmentId: _id,
            treatment: name,
            price: price,
            date: event.target.date.value,
            slots: event.target.slot.value,
            names: event.target.name.value,
            number: event.target.number.value,
            email: event.target.email.value
        }

        const url = 'https://evening-dawn-51608.herokuapp.com/booking';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(takeData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {

                    setTreatment(null);
                    toast(`Appointment of ${takeData.treatment} at ${takeData.slots} are successful `);
                }

                else {

                    toast.error('You have already booked!');
                }
                setTreatment(null);
                refetch()
            })

    }

    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>
                    {/* <p className="p-3  bg-base-200 my-5 rounded-lg ">{format(date, 'PP')}</p> */}
                    {/* <p className="p-3  bg-base-200 mb-5 rounded-lg">{slots[0]}</p> */}

                    <form onSubmit={submitForm}>
                        <input type="text" name='date' disabled readOnly value={format(date, 'PP')} className="input input-bordered input-md w-full max-w-xs lg:max-w-lg my-5" />

                        <select name='slot' className="select border-inherit w-full max-w-xs lg:max-w-lg mb-5">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' disabled readOnly value={user?.displayName} className="input input-bordered input-md w-full max-w-xs lg:max-w-lg" />
                        <input type="number" name='number' placeholder="Phone Number" className="input input-bordered input-md w-full max-w-xs lg:max-w-lg my-5" />
                        <input type="email" name='email' disabled readOnly value={user?.email} className="input input-bordered input-md w-full max-w-xs lg:max-w-lg" />
                        <input type="submit" className="input input-bordered input-md w-full max-w-xs lg:max-w-lg mt-5 bg-accent text-white" value='Submit' />
                    </form>

                    {/* <div className="modal-action justify-center">
                        <label htmlFor="my-modal-6" className="btn">Submit</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Modal;