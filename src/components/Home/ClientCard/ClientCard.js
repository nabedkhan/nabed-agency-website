import React from 'react';

const ClientCard = ({ feedback }) => {
    const { name, designation, description, image } = feedback
    return (
        <div className="col-lg-4 col-md-6">
            <div className="client-card mb-4">
                <div className="top-area d-flex align-items-center">
                    <img src={image} className="img-fluid" alt="" />
                    <div className="name-title ml-3">
                        <h4>{name}</h4>
                        <h6>{designation}</h6>
                    </div>
                </div>

                <p>{description}</p>
            </div>
        </div>
    );
};

export default ClientCard;