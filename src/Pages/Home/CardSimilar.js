import React from 'react';
import CardSimilarpro from './CardSimilarpro';
import covertooth from './../../assets/images/fluoride.png';
import cavity from './../../assets/images/cavity.png';
import tooth from './../../assets/images/whitening.png';

const CardSimilar = () => {

    const fakeData = [

        { id: 1, img: covertooth, title: 'Fluoride Treatment', describe: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' },

        { id: 2, img: cavity, title: 'Cavity Filling', describe: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' },

        { id: 3, img: tooth, title: 'Teeth Whitening', describe: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' }
    ]

    return (

        <div className='container mx-auto my-20 lg:my-28 '>
            <h1 className='text-xl uppercase font-bold mb-5 text-center text-success  lg:p-0 '>OUR SERVICES</h1>
            <h1 className='text-4xl text-center mb-10 p-5 lg:p-0 lg:mb-20 '>Services We Provide</h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 '>
                {
                    fakeData.map(item => <CardSimilarpro key={item.id} item={item}></CardSimilarpro>)
                }
            </div>
        </div>
    );
};

export default CardSimilar;