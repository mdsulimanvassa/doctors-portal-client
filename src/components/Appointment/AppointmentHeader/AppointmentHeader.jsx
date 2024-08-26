import React from 'react';
import cheir  from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
   
    return (
        <main className='row contint d-flex align-items-center'>
            <div className="col-md-4 offset-md-1">
            <h1>Appointment</h1>
             <Calendar onChange={handleDateChange} value={new Date()} />
            </div>
            <div className="col-md-6">
                <img src={cheir} alt="" className="img-flude" />
            </div>
        </main>
    );
};

export default AppointmentHeader;