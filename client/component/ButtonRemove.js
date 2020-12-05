import React from 'react';
import '../style/ButtonRemove.css'

const ButtonRemove = ({remove, id}) => {
    return (
        <div className="close-container" onClick={()=>remove(id)}>
            <div className="leftright"></div>
            <div className="rightleft"></div>
            <label className="close">remove</label>
        </div>
    );
};

export default ButtonRemove;
