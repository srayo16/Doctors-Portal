import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailaveAppointmentpro from './AvailaveAppointmentpro';

const AvailableAppointment = ({ date, setDate }) => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // console.log(services);
    return (
        <div className=' p-10 lg:p-0'>
            <h3 className='text-xl text-center text-secondary'>Available Appointments on {format(date, 'PP')}</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
                {
                    services.map(service => <AvailaveAppointmentpro key={service._id} service={service}></AvailaveAppointmentpro>)
                }
            </div>

        </div>
    );
};

export default AvailableAppointment;