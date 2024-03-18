import React from 'react';
import './Services.css';
import floutide from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png';
import ServicesDetiel from '../ServicesDetiel/ServicesDetiel';

const serviceData = [
    {
        name: 'Fluotide Treatment',
        img: floutide,
    },
    {
        name: 'Cavity Filling',
        img: cavity,
    },
    {
        name: 'Teeth Whitening',
        img: whitening,
    },
]

const Services = () => {
    return (
        <section className='services-cotainer'>
            <div className="text-conteiner mt-5">
                <h5>OUR SERVICES</h5>
                <h2>Services We Provider</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 mt-5">
                    {
                        serviceData.map(service => <ServicesDetiel service={service}></ServicesDetiel>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;