import React from 'react';

const CardSimilarpro = ({ item }) => {

    const { id, title, img, describe } = item;
    // console.log(item);

    return (
        <div className="card w-80 lg:w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{describe}</p>
            </div>
        </div>
    );
};

export default CardSimilarpro;