import React from 'react';

const ModalWindow = ({handleSubmit,openCloseModal ,Component}) => {
    return (
       <Component handleSubmit={handleSubmit} closeModal={openCloseModal}/>
    );
};

export default ModalWindow;
