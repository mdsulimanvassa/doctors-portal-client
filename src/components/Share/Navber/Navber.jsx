import React from 'react';
import './Navber.css';

const Navber = () => {
    return (
        <nav>
            <ul>
                <li> <a href="/#">Home</a></li>
                <li><a href="/#">About</a></li>
                <li><a href="/dashboard">Doctors Dashboard</a></li>
                <li><a className='color' href="/#">Admin</a></li>
                <li><a className='color' href="/#">Blogs</a></li>
                <li><a className='color' href="/login">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default Navber;