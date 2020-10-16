import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Order.css';

const Order = () => {
    const { name } = useParams();
    const [placeOrder, setPlaceOrder] = useState(false);
    if (placeOrder) {
        setTimeout(() => setPlaceOrder(false), 4000)
    }
    const [orderInfo, setOrderInfo] = useState({
        service: name
    });
    const handleBlur = (event) => {
        const newOrderInfo = { ...orderInfo };
        newOrderInfo[event.target.name] = event.target.value;
        newOrderInfo.status = 'Pending';
        setOrderInfo(newOrderInfo);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('https://cryptic-tor-66942.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(orderInfo)
        })
            .then(response => response.json())
            .then(data => setPlaceOrder(data))
    }


    return (
        <div className="order-area" >
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onBlur={handleBlur}
                    placeholder="Your name/company’s name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    onBlur={handleBlur}
                    placeholder="Your email address"
                    required
                />
                <input
                    type="text"
                    name="service"
                    onBlur={handleBlur}
                    placeholder="Your service"
                    defaultValue={name}
                />
                <textarea
                    type="text"
                    name="details"
                    onBlur={handleBlur}
                    placeholder="Project Details"
                    required
                />
                <input
                    type="number"
                    name="price"
                    onBlur={handleBlur}
                    placeholder="Price"
                    required
                />
                <input
                    type="file"
                    name="file"
                    onBlur={handleBlur}
                    placeholder="Upload a image"
                />
                <button type="submit">Send</button>
            </form>
            {
                placeOrder && <p className="text-success ml-2">Order placed successfully</p>
            }
        </div>
    );
};

export default Order;