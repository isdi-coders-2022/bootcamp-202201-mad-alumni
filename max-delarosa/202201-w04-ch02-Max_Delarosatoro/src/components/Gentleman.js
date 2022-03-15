import React from 'react';
import Button from './Button';

const Gentleman = ({ gentleman, handleSelect, handleDelete }) => {
    const handleClick = (e) => {
        if (
            e.target.className ===
            'icon gentleman__icon gentleman__icon--delete fas fa-times'
        ) {
            handleDelete(gentleman);
        } else {
            handleSelect(gentleman);
        }
    };
    return (
        <li className="gentleman">
            <div className="gentleman__avatar-container">
                <img
                    className="gentleman__avatar"
                    src={`./img/${gentleman.picture}`}
                    alt={gentleman.alternativeText}
                />
                <span className="gentleman__initial">{gentleman.name[0]}</span>
            </div>
            <div className="gentleman__data-container">
                <h2 className="gentleman__name">{gentleman.name}</h2>
                <ul className="gentleman__data-list">
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">
                            Profession:
                        </span>
                        {gentleman.profession}
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Status:</span>{' '}
                        {gentleman.status}
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Twitter:</span>{' '}
                        {gentleman.twitter}
                    </li>
                </ul>
            </div>
            <Button
                handleClick={handleClick}
                className="icon gentleman__icon fas fa-check"
            />
            <Button
                handleClick={handleClick}
                className="icon gentleman__icon gentleman__icon--delete fas fa-times"
            />
        </li>
    );
};

export default Gentleman;
