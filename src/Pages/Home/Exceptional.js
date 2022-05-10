import React from 'react';
import ButtonOrigin from '../Shared/ButtonOrigin';
import treatment from './../../assets/images/treatment.png';

const Exceptional = () => {
    return (
        <div className="hero my-screen my-20 lg:my-40 ">
            <div className="hero-content flex-col lg:flex-row-reverse p-0 lg:p-5">
                <img src={treatment} className="max-w-sm rounded-lg lg:shadow-2xl p-5 lg:p-0" alt='' />
                <div className='p-5'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <ButtonOrigin>Get started</ButtonOrigin>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;