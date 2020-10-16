import React, { useEffect, useState } from 'react';
import Sidebar from '../../../Sidebar/Sidebar';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import './Services.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Services = () => {
    const [status, setStatus] = useState('Pending');
    const options = ['Pending', 'On going', 'Done'];
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://cryptic-tor-66942.herokuapp.com/allServices')
            .then(response => response.json())
            .then(data => {
                setServices(data);
            })
    }, []);


    return (
        <div className="add-service">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-4 px-0">
                        <Sidebar />
                    </div>
                    <div className="col-xl-10 col-lg-9 col-md-8 px-0"
                        style={{ backgroundColor: '#E5E5E5', height: '100vh' }}>
                        <DashboardHeader name="All Service List" />

                        <div className="table-area">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Project Details</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        services.map(service => <tr key={service._id}>
                                            <th scope="row">{service.name}</th>
                                            <td>{service.email}</td>
                                            <td>{service.service}</td>
                                            <td>{service.details}</td>
                                            <td><Dropdown options={options} onChange={setStatus} value={service.status} /></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;