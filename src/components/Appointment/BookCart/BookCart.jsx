import React, { useState } from 'react';
import './BookCart.css';
import AppointmentFrom from '../AppointmentFrom/AppointmentFrom';

const BookCart = ({book, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div className='flex-bassic'>
            <div className="book-shadow">
                <div className="text-center button-content">
                    <h5>{book.subject}</h5>
                    <h6>{book.visitingHour}</h6>
                    <p>{book.totalSpace}</p>
                    <button onClick={openModal} type="button">BOOK APPOINMENT</button>
                    <AppointmentFrom modalIsOpen={modalIsOpen} closeModal={closeModal} book={book.subject} date={date}></AppointmentFrom>
                </div>
            </div>
        </div>
    );
};

export default BookCart;