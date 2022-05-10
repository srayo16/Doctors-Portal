import React from 'react';
import chair from '../../assets/images/chair.png';
import chairBack from '../../assets/images/bg.png';
import ButtonOrigin from '../Shared/ButtonOrigin';

const FirsSection = () => {
    return (
        <div className="hero my-h-screen my-60" style={{ background: `url(${chairBack})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl " alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <ButtonOrigin>Get started</ButtonOrigin>
                </div>
            </div>
        </div>
    );
};

export default FirsSection;