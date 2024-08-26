import React from 'react';
import AppointmentUser from '../AppointmentUser/AppointmentUser';

const AppoinmentDate = ({appointments}) => {
    return (
        <div>
            <h2 style={{color: '#18d2af'}}>Appointment</h2>
            <br />
            { 
            appointments.length ?
                appointments.map(app => <AppointmentUser key={app._id} appointment={app}></AppointmentUser>)
                : <div className="">
                    <h1>No Appointments</h1>
                </div>
            }
        </div>
    );
};

export default AppoinmentDate;