import React from 'react';
import InfoCart from '../InfoCart/InfoCart';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import './BusinessInfo.css';


const businessInfo = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary',
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        icon: faMapMarker,
        background: 'dark',
    },
    {
        title: 'Call us now',
        description: '+15374829539',
        icon: faPhone,
        background: 'primary',
    },
]
const BusinessInfo = () => {
    return (
        <section className='flex-content'>
            <div className="row content">
                {
                    businessInfo.map(info => <InfoCart info={info}></InfoCart>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;