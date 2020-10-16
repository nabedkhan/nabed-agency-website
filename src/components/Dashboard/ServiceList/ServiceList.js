import React, { useContext, useEffect } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import ServiceListCard from './ServiceListCard';
import './ServiceList.css';
import { useState } from 'react';
import { UserContext } from '../../../App';

const ServiceList = () => {
    const [serviceList, setServiceList] = useState([]);
    const { loggedInUser } = useContext(UserContext);
    useEffect(() => {
        fetch(`https://cryptic-tor-66942.herokuapp.com/service?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(data => setServiceList(data))
    }, []);

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
                            {
                                serviceList.map(service => <ServiceListCard
                                    key={service._id}
                                    service={service} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;