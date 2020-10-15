import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Order from '../Order/Order';
import './DashboardHome.css';

const DashboardHome = () => {
    return (
        <div className="dashboard-home">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-4 px-0">
                        <Sidebar />
                    </div>
                    <div className="col-xl-10 col-lg-9 col-md-8 px-0"
                        style={{ backgroundColor: '#E5E5E5', height: '100vh' }}>
                        <DashboardHeader name="Order" />
                        <Order />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;