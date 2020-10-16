import React, { useState } from 'react';
import Sidebar from '../../../Sidebar/Sidebar';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import './AddService.css';

const AddService = () => {
    const [serviceInfo, setServiceInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (event) => {
        const newServiceInfo = { ...serviceInfo };
        newServiceInfo[event.target.name] = event.target.value;
        setServiceInfo(newServiceInfo)
    }

    const handleChange = (event) => {
        const newFile = event.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', serviceInfo.name);
        formData.append('body', serviceInfo.body);

        fetch('https://cryptic-tor-66942.herokuapp.com/newService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    return (
        <div className="add-service">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-4 px-0">
                        <Sidebar />
                    </div>
                    <div className="col-xl-10 col-lg-9 col-md-8 px-0"
                        style={{ backgroundColor: '#E5E5E5', height: '100vh' }}>
                        <DashboardHeader name="Add New Service" />
                        <div className="add-service-form">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    onBlur={handleBlur}
                                    placeholder="Enter Service Title"
                                    required
                                />
                                <textarea
                                    type="text"
                                    name="body"
                                    onBlur={handleBlur}
                                    placeholder="Project Details"
                                    required
                                />
                                <input
                                    type="file"
                                    name="image"
                                    onChange={handleChange}
                                    placeholder="Upload a image"
                                />
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;