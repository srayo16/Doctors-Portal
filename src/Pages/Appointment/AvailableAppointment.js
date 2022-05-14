import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import UseServices from '../../Hook/UseServices';
import AvailaveAppointmentpro from './AvailaveAppointmentpro';
import Modal from './Modal';
import Spinners from './../Shared/Spinners';

const AvailableAppointment = ({ date, setDate }) => {
    const [treatment, setTreatment] = useState();
    // const [services, setServices] = useState([]);
    const formattedDate = format(date, 'PP');

    const { isLoading, data: services, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json()
            )
    )

    if (isLoading) {
        return <Spinners></Spinners>
    }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])



    // console.log(services);
    return (
        <div className=' p-10 lg:p-0'>
            <h3 className='text-xl text-center text-secondary'>Available Appointments on {format(date, 'PP')}</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
                {
                    services.map(service => <AvailaveAppointmentpro key={service._id} service={service} setTreatment={setTreatment} ></AvailaveAppointmentpro>)
                }
            </div>
            {treatment && <Modal key={treatment._id} treatment={treatment} refetch={refetch} setTreatment={setTreatment} date={date}></Modal>}

        </div>
    );
};

export default AvailableAppointment;