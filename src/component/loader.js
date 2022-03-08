import React from 'react';
import beepboop from '../resoures/beepboop.gif'

const Loader = () => {
    return (
        <div>
            <img src={beepboop} alt="loading data"/>
        </div>
        
    );
};

export default Loader;