import React from 'react';

const AddButton = ({title, method}) => {
    return (
        <button onClick={method}>{title}</button>
    );
};

export default AddButton;
