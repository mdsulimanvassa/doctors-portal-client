import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCart.css';


const InfoCart = ({ info }) => {
    return (
        <div className='col-md-4 info-cart'>
            <div className={`info-content info-${info.background}`}>
                <div className="info-padding">
                    <FontAwesomeIcon className='icon-info' icon={info.icon} />
                </div>
                <div className="">
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCart;