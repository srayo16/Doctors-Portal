import React from 'react';

const AvailaveAppointmentpro = ({ service }) => {
    const { name, slots, _id } = service;
    console.log(slots);
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body mx-auto text-center">
                <h2 className="card-title text-secondary my-2 text-xl">{name}</h2>
                <p>{
                    slots.length ? <span>
                        {slots[0]}
                    </span> : <span className='text-red-500'>
                        No slots available
                    </span>
                }</p>

                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>

                <div className="card-actions justify-center mt-3">
                    <button disabled={slots.length === 0} className="btn btn-secondary uppercase text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AvailaveAppointmentpro;