/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const Button = ({ className, handleClick }) => {
    return (
        <div onClick={handleClick}>
            <i className={className} />
        </div>
    );
};

export default Button;
