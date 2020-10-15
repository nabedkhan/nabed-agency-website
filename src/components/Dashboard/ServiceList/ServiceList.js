import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import ServiceListCard from './ServiceListCard';
import './ServiceList.css';

const ServiceList = () => {
    return (
        <div className="service-list">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-4 px-0">
                        <Sidebar />
                    </div>
                    <div className="col-xl-10 col-lg-9 col-md-8 px-0"
                        style={{ backgroundColor: '#E5E5E5', height: '100vh' }}>
                        <DashboardHeader name="Service List" />

                        <div className="row m-4">
                            <ServiceListCard />
                            <ServiceListCard />
                            <ServiceListCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;