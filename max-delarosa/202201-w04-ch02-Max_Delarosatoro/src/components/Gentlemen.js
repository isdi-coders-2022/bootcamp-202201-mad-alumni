import React from 'react';
import Gentleman from './Gentleman';

export const Gentlemen = ({ gentlemen, handleSelect, handleDelete }) => {
    return (
        <ul className="gentlemen">
            {gentlemen.map((item) => (
                <Gentleman
                    handleSelect={handleSelect}
                    handleDelete={handleDelete}
                    key={item.id}
                    gentleman={item}
                />
            ))}
        </ul>
    );
};
