import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Service.css';

const Service = () => {
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/serviceList')
            .then(response => response.json())
            .then(data => {
                setServiceData(data);
            })
    }, [])
    return (
        <div className="service-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="common-heading">
                            <h3>Provide awesome <span>services</span></h3>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 pt-3">
                    {
                        serviceData.map(service => <ServiceCard key={service._id} service={service} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;