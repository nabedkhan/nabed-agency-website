import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { name, body, image } = service;
    return (
        <div className="col-lg-4 col-md-6">
            <Link to={`/dashboard/order/${name}`}>
                <div className="service-card text-center">
                    <img src={`https://cryptic-tor-66942.herokuapp.com/${image}`} className="img-fluid" alt="" />
                    <h4 className="mt-4">{name}</h4>
                    <p>{body}</p>
                </div>
            </Link>
        </div>
    );
};

export default ServiceCard;