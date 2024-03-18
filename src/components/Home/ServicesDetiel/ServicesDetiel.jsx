import React from 'react';
import './ServicesDetiel.css';

const ServicesDetiel = ({service}) => {
    return (
        <div className='col-md-4 detail' >
            <img src={service.img} alt="" />
            <h5 className='mt-5 mb-3'>{service.name}</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, tenetur?</p>
        </div>
    );
};

export default ServicesDetiel;