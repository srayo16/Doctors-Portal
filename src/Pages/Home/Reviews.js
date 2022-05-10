import React from 'react';

const Reviews = ({ item }) => {
    const { id, name, review, place, img } = item;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='my-5'>{review}</p>
                <div className="flex  items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={img} alt='' />
                        </div>

                    </div>
                    <div>
                        <h3 className='text-xl'>{name}</h3>
                        <p>{place}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;