import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const Modal = ({ treatment, date, setTreatment }) => {
    // console.log(treatment);
    const { name, slots, _id } = treatment;
    const [user, loading, error] = useAuthState(auth);

    const submitForm = event => {
        event.preventDefault();
        let time = event.target.time.value;
        let slot = event.target.slot.value;
        let names = event.target.name.value;
        let number = event.target.number.value;
        let email = event.target.email.value;
        console.log(names, name, _id, time, slot, number, email);
        setTreatment(null);
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
                        <input type="text" name='time' disabled readOnly value={format(date, 'PP')} className="input input-bordered input-md w-full max-w-xs lg:max-w-lg my-5" />

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