import React, { useState } from 'react';
import bannerImage from './../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppoinmentBanner = ({ date, setDate }) => {



    const todayDate = () => {
        let date = new Date();
        setDate(date);
    }

    return (
        <div className="hero my-screen my-20 lg:my-40">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImage} alt='appointment' />
                <div className='lg:mr-20'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}

                    />
                    <button className='lg:ml-5' onClick={() => todayDate()}>Back to today</button>
                    {/* <p className="py-6 lg:ml-5">Your selected date: {format(date, 'PP')}</p> */}

                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;