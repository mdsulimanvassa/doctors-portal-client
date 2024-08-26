import React, { useState } from 'react';
import './AddADoctors.css';
import Sidevar from '../../Dashboard/Sidevar/Sidevar';

const AddADoctors = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
      
        fetch('http://localhost:4200/addADoctor', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        
    }

    return (
        <section className='side-containt'>
            <Sidevar></Sidevar>
            <div className="">
            <h1>Add A Doctors</h1>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input onBlur={handleBlur} type="email" class="form-control" name='email' placeholder='Email'/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Name</label>
                    <input onBlur={handleBlur} type="text" class="form-control" name='name' placeholder='Name'/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Upload A Image</label>
                    <input onChange={handleFileChange} type="file" className="form-control" placeholder='Picture'/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </section>
    );
};

export default AddADoctors;