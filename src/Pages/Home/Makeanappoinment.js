import React from 'react';
import ButtonOrigin from '../Shared/ButtonOrigin';
import apoinPic from './../../assets/images/doctor-small.png';
import apoinBg from './../../assets/images/appointment.png';

const Makeanappoinment = () => {

    return (
        <section style={{ background: `url(${apoinBg})` }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={apoinPic} alt="" />
            </div>
            <div className='flex-1 m-10'>
                <h3 className='text-primary text-xl font-bold mb-5'>Appointment</h3>
                <h2 className='text-3xl text-white mb-5'>Make an appointment Today</h2>
                <p className='text-white mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perferendis aperiam corporis delectus qui incidunt natus totam iusto sapiente eum nobis quia cum quod similique adipisci ut nihil, cumque culpa dolor sint voluptatum inventore quibusdam. Eveniet fuga deserunt aspernatur voluptatibus.</p>
                <ButtonOrigin>get started</ButtonOrigin>
            </div>
        </section>
    );
};

export default Makeanappoinment;