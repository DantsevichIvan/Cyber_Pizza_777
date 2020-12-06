import React from 'react';
import AddButton from "./AddButton";

const HeaderContainer = ({create,value, title}) => {
    return (
        <div className='container_header'>
            <h3>{title}</h3>
            <AddButton method={create} value={value} />
        </div>
    );
};

export default HeaderContainer;
