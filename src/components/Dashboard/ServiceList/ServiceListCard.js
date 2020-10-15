import React from 'react';

const ServiceListCard = () => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="service-list-card">
                <img src='https://i.postimg.cc/L4NvyM7T/service1.png' className="img-fluid" alt="" />
                <button className="pending-button">Pending</button>
                <h4 className="mt-4">Web and Mobile design</h4>
                <p>We craft stunning and amazing web UI, using a well drafted UX to fit your product.</p>
            </div>
        </div>
    );
};

export default ServiceListCard;