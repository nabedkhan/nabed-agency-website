import React from 'react';
import Sidebar from '../../../Sidebar/Sidebar';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import './MakeAdmin.css';

const MakeAdmin = () => {
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
                            <form action="">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email address"
                                    required
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

export default MakeAdmin;