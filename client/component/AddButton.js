import React from 'react';

const AddButton = ({title, method}) => {
    return (
        <button  className='container_header_btn' onClick={method}>{title}</button>
    );
};

export default AddButton;
