import React from 'react';

const ModalWindow = ({openCloseModal ,Component, item}) => {
    return (
       <Component closeModal={openCloseModal} item={item}/>
    );
};

export default ModalWindow;
