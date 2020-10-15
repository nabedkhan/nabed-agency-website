import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Service.css';

const Service = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Web & Mobile design',
            body: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product.',
            image: 'https://i.postimg.cc/L4NvyM7T/service1.png'
        },
        {
            id: 2,
            name: 'Graphic design',
            body: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
            image: 'https://i.postimg.cc/25Rxqjbz/service2.png'
        },
        {
            id: 3,
            name: 'Web development',
            body: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
            image: 'https://i.postimg.cc/024ns09K/service3.png'
        }
    ];
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
                        serviceData.map(service => <ServiceCard key={service.id} service={service} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;