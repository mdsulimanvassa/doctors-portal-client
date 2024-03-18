import React from 'react';
import './HeaderMain.css';
import cheir from '../../../images/chair.png';
const HeaderMain = () => {
    return (
        <main className='row contint d-flex align-items-center'>
            <div className="col-md-4 offset-md-1">
            <h1>Your New Simple <br /> Starts Here</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat atque delectus voluptate beatae! Iste, provident.</p>
            <button className='btn btn-primary'>GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={cheir} alt="" className="img-flude" />
            </div>
        </main>
    );
};

export default HeaderMain;