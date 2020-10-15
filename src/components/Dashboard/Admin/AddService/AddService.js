import React, { useState } from 'react';
import Sidebar from '../../../Sidebar/Sidebar';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import './AddService.css';

const AddService = () => {
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
                            <form>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Service Title"
                                    required
                                />
                                <textarea
                                    type="text"
                                    name="details"
                                    placeholder="Project Details"
                                    required
                                />
                                <input
                                    type="file"
                                    name="image"
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