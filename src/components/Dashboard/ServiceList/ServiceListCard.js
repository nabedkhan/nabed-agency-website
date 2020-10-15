import React from 'react';

const ServiceListCard = ({ service }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="service-list-card">
                <img src='https://i.postimg.cc/L4NvyM7T/service1.png' className="img-fluid" alt="" />
                <button className="pending-button">{service.status}</button>
                <h4 className="mt-4">{service.service}</h4>
                <p>{service.details}</p>
            </div>
        </div>
    );
};

export default ServiceListCard;