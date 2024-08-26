import React from 'react';
import './AppointmentUser.css';
import Appointment from './../../Appointment/Appointment/Appointment';

const AppointmentUser = ({ appointment }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>{appointment.name}</td>
                        <td>{appointment.phoneNumber}</td>
                        <td>{appointment.email}</td>
                    </tr>
            </tbody>
        </table>
    );
};

export default AppointmentUser;