import React from 'react';
import './BookAppointment.css';
import BookCart from '../BookCart/BookCart';

const bookingDate = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00AM',
        totalSpace: '10 SPACES AVAILABE',
    },
    {
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:50 AM - 11:30AM',
        totalSpace: '10 SPACES AVAILABE',
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '5:00 PM - 6:30 PM',
        totalSpace: '10 SPACES AVAILABE',
    }, {
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '7:00 AM - 8:30AM',
        totalSpace: '10 SPACES AVAILABE',
    }, {
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00AM',
        totalSpace: '10 SPACES AVAILABE',
    }, {
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00AM',
        totalSpace: '10 SPACES AVAILABE',
    },
]

const BookAppointment = ({date}) => {
    return (
        <section className='text-container'>
            <h1>Available Appontments on {date.toDateString()}</h1>
            <div className="bookCart-container">
                {
                    bookingDate.map(booking => <BookCart book={booking} date={date} key={booking.id}></BookCart>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;