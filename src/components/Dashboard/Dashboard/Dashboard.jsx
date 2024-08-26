import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import Sidevar from '../Sidevar/Sidevar';
import AppoinmentDate from '../AppoinmentDate/AppoinmentDate';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = (date) => {
        setSelectedDate(date)
    }
    useEffect(() => {
        fetch('http://localhost:4200/appointmentsByDate', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({date: selectedDate}),
        })
        .then(res => res.json())
        .then(data => {
            setAppointments(data);
        })
        .catch(error => console.log(error));
    }, [selectedDate])
    return (
        <section className='dashboard-containt'>
            <div className="display-containt">
                <div className="">
                    <Sidevar></Sidevar>
                </div>
                <div className="">
                    <h2>Appointments</h2>
                    <br />
                    <Calendar onChange={handleDateChange} value={new Date()} />
                </div>
                <div className="">
                    <AppoinmentDate appointments={appointments} key={appointments._id}></AppoinmentDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;