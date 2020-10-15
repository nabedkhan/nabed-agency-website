import React, { useState, useEffect } from 'react';
import ClientCard from '../ClientCard/ClientCard';
import './Clients.css';

const Clients = () => {
    // const feedbacks = [
    //     {
    //         id: 1,
    //         name: 'Nash Patrik',
    //         designation: 'CEO, Manpol',
    //         review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas.',
    //         image: 'https://i.postimg.cc/R0PCqhh8/customer-1.png'
    //     },
    //     {
    //         id: 2,
    //         name: 'Miriam Barron',
    //         designation: 'CEO, Manpol',
    //         review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas.',
    //         image: 'https://i.postimg.cc/63g9LPdf/customer-2.png'
    //     },
    //     {
    //         id: 3,
    //         name: 'Bria Malone',
    //         designation: 'CEO, Manpol',
    //         review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas.',
    //         image: 'https://i.postimg.cc/vBcYny6m/customer-3.png'
    //     }
    // ]

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