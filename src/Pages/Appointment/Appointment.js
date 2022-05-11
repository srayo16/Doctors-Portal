import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (

        <div className='mx-auto'>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvailableAppointment date={date} setDate={setDate}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;