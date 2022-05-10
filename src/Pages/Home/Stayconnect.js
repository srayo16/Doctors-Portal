import React from 'react';
import ButtonOrigin from '../Shared/ButtonOrigin';
import bgImage from './../../assets/images/appointment.png';

const Stayconnect = () => {
    return (
        <div className="hero my-screen mt-10" style={{ background: `url(${bgImage})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md my-10">
                    <h3 className=" mb-1 text-xl font-bold text-success">Contact Us</h3>
                    <h3 className="mb-10 text-4xl text-white">Stay connected with us</h3>

                    <input type="email" className='rounded p-3 w-80 lg:w-96' placeholder='Your email' /> <br /> <br />
                    <input type="text" className='rounded p-3 w-80 lg:w-96' placeholder='Subject' /> <br /> <br />
                    <textarea type="text" className='rounded p-3 w-80 lg:w-96' placeholder='Your message' /> <br /> <br />

                    <ButtonOrigin>Submit</ButtonOrigin>
                </div>
            </div>
        </div>
    );
};

export default Stayconnect;