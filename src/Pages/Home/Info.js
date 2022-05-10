import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import Infopro from './Infopro';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 m-5'>
            <Infopro cardTitle={'Opening Hours'} cardDescription={'Lorem Ipsum is simply dummy text of the pri'} cardCss={'bg-gradient-to-r from-secondary to-primary'} img={clock}></Infopro>

            <Infopro cardTitle={'Visit our location'} cardDescription={'Brooklyn, NY 10036, United States'} cardCss={"bg-accent"} img={marker}></Infopro>

            <Infopro cardTitle={'Contact us now'} cardDescription={'+000 123 456789'} cardCss={'bg-gradient-to-r from-secondary to-primary'} img={phone}></Infopro>
        </div>
    );
};

export default Info;