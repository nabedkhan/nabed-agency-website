import React, { useState, useEffect } from 'react';
import ClientCard from '../ClientCard/ClientCard';
import './Clients.css';

const Clients = () => {

    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(response => response.json())
            .then(data => setFeedbacks(data))
    }, [])
    return (
        <div className="clients-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="common-heading mb-5 pb-3">
                            <h3>Clients <span>Feedback</span></h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {
                        feedbacks.map(feedback => <ClientCard key={feedback._id} feedback={feedback} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Clients;