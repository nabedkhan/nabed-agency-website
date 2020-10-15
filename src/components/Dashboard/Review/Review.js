import React from 'react';
import { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './Review.css';

const Review = () => {
    const [review, setReview] = useState({});
    const [submitSuccess, setSubmitSuccess] = useState(false);
    if (submitSuccess) {
        setTimeout(() => setSubmitSuccess(false), 4000);
    }
    const handleBlur = (event) => {
        const newReview = { ...review };
        newReview[event.target.name] = event.target.value;
        newReview.image = sessionStorage.getItem('userPicture');
        setReview(newReview);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:5000/newReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(result => {
                setSubmitSuccess(result);
            })
    }

    return (
        <div className="review">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-4 px-0">
                        <Sidebar />
                    </div>
                    <div className="col-xl-10 col-lg-9 col-md-8 px-0"
                        style={{ backgroundColor: '#E5E5E5', height: '100vh' }}>
                        <DashboardHeader name="Review" />
                        <div className="review-form">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    onBlur={handleBlur}
                                    required
                                />
                                <input
                                    type="text"
                                    name="designation"
                                    placeholder="Company's name, Designation"
                                    onBlur={handleBlur}
                                    required
                                />
                                <textarea
                                    type="text"
                                    name="description"
                                    placeholder="Description"
                                    onBlur={handleBlur}
                                    required
                                />
                                <button type="submit">Submit</button>
                            </form>
                            {
                                submitSuccess &&
                                <p className="text-success ml-3">Your review submitted successfully</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;