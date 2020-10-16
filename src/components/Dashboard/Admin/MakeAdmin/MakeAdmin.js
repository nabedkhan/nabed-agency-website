import React, { useState } from 'react';
import Sidebar from '../../../Sidebar/Sidebar';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [adminEmail, setAdminEmail] = useState(null);
    const [newAdmin, setNewAdmin] = useState(false);

    const handleBlur = (event) => {
        setAdminEmail(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://cryptic-tor-66942.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: adminEmail })
        })
            .then(response => response.json())
            .then(result => setNewAdmin(result))
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
                        <DashboardHeader name="Make a Admin" />
                        <div className="admin-form">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    name="email"
                                    onBlur={handleBlur}
                                    placeholder="Your email address"
                                    required
                                />
                                <button type="submit">Submit</button>
                            </form>
                            {
                                newAdmin && <p className="text-success ml-2">New Admin Added Successfully</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;