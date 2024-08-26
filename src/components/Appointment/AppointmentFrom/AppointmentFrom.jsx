import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './AppointmentFrom.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const AppointmentFrom = ({ modalIsOpen, closeModal, book, date }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        data.service = book;
        data.date = date;
        data.created = new Date();

        fetch('http://localhost:4200/addAppointment', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                alert('Appointment created successfully')
            }
        })
        .catch(error => console.log(error))
       
    }
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className='text-center text-info'>{book}</h2>
                <p className='text-center text-secondary'><small>On {date.toDateString()}</small></p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type='text' name='name' placeholder='Your Name'
                            {...register('Name', { required: true })} />
                            {errors.Name && <p className='text-danger'>This name is required.</p>}
                    </div>
                    <div className="form-group">
                        <input
                            type="tel" {...register('phoneNumber', { required: true })} placeholder="Phone Number"/>
                            {errors.phoneNumber && <p className='text-danger'>This phone number is required.</p>}
                    </div>
                    <div className="form-group">
                        <input type='email' {...register('email', { required: true })} placeholder='Enter Your Email'/>
                        {errors.email && <p className='text-danger'>This email is required.</p>}
                    </div>
                    <div className="from-conteint">
                        <div className="form-group weidth-containt">
                            <select name="gander" {...register('gander', { required: true })}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not Set">Not Set</option>
                            </select>
                            {errors.gander && <p className='text-danger'>This gander is required.</p>}
                        </div>
                        <div className="form-group weidth-containt">
                            <input type='tel' {...register('age', { required: true })} placeholder='Your Age'/>
                            {errors.age && <p className='text-danger'>This age is required.</p>}
                        </div>
                        <div className="form-group weidth-containt">
                            <input type='number' {...register('weidth', { required: true })} placeholder='Weight' />
                            {errors.weidth && <p className='text-danger'>This weidth is required.</p>}
                        </div>
                    </div>
                    <div className="form-group button-containt">
                        <button type="submit">SEND</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentFrom;