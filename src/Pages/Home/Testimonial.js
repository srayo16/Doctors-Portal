import React from 'react';
import quaotePic from '../../assets/icons/quote.svg';
import person1 from './../../assets/images/people1.png';
import Reviews from './Reviews';

const Testimonial = () => {

    const fakeData2 = [
        { id: 1, review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', name: 'Winson Herry', place: 'California', img: person1 },
        { id: 2, review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', name: 'Winson Herry', place: 'California', img: person1 },
        { id: 3, review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', name: 'Winson Herry', place: 'California', img: person1 },
    ]
    return (
        <section className='my-20 lg:my-40 p-10 lg:p-5'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-primary font-bold text-xl mb-3' >Testimonial</h3>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div className='w-24 lg:w-48'>
                    <img src={quaotePic} alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    fakeData2.map(item => <Reviews key={item.id} item={item}></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonial;