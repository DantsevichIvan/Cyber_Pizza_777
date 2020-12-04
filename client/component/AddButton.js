import React from 'react';
import '../style/AddButton.css'

const AddButton = ({value, method}) => {
    return (
        <div className='btn_Add'>
            <button className="icon-btn add-btn" onClick={method}>
                <div className="add-icon"></div>
                <div className="btn-txt">{value}</div>
            </button>
        </div>
    );
};

export default AddButton;
