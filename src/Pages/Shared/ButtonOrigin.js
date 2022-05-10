import React from 'react';

const ButtonOrigin = ({ children }) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary  uppercase font-bold text-white ">{children}</button>
    );
};

export default ButtonOrigin;