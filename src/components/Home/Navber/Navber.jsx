import React from 'react';
import './Navber.css';

const Navber = () => {
    return (
        <nav>
            <ul>
                <li> <a href="/#">Home</a></li>
                <li><a href="/#">About</a></li>
                <li><a href="/#">Dental Services</a></li>
                <li><a className='color' href="/#">Reviews</a></li>
                <li><a className='color' href="/#">Blogs</a></li>
                <li><a className='color' href="/#">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default Navber;