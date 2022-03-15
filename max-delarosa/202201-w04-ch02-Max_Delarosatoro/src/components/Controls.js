import React from 'react';

const Controls = ({ gentlemen, selectAll }) => {
    const handleClick = () => {
        selectAll();
    };
    return (
        <section className="controls">
            <p className="info">
                {gentlemen.filter((item) => item.selected).length} gentlemen
                pointing at you
            </p>
            <button
                onClick={handleClick}
                type="button"
                className="button button--select"
            >
                Select all
            </button>
        </section>
    );
};

export default Controls;
