import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import UseServices from '../../Hook/UseServices';
import AvailaveAppointmentpro from './AvailaveAppointmentpro';
import Modal from './Modal';

const AvailableAppointment = ({ date, setDate }) => {

    const [services, setServices] = UseServices();
    const [treatment, setTreatment] = useState();

    // console.log(services);
    return (
        <div className=' p-10 lg:p-0'>
            <h3 className='text-xl text-center text-secondary'>Available Appointments on {format(date, 'PP')}</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
                {
                    services.map(service => <AvailaveAppointmentpro key={service._id} service={service} setTreatment={setTreatment} ></AvailaveAppointmentpro>)
                }
            </div>
            {treatment && <Modal key={treatment._id} treatment={treatment} setTreatment={setTreatment} date={date}></Modal>}

        </div>
    );
};

export default AvailableAppointment;