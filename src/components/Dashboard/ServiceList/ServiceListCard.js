import React from 'react';

const ServiceListCard = ({ service }) => {
    // const [services, setServices] = useState([]);
    // const [image, setImage] = useState({});
    // useEffect(() => {
    //     fetch('https://cryptic-tor-66942.herokuapp.com/serviceList')
    //         .then(response => response.json())
    //         .then(data => setServices(data))
    // }, [service._id]);


    return (
        <div className="col-lg-4 col-md-6">
            <div className="service-list-card mb-4">
                <img src='https://i.postimg.cc/L4NvyM7T/service1.png' className="img-fluid" alt="" />
                <button className="pending-button">{service.status}</button>
                <h4 className="mt-4">{service.service}</h4>
                <p>{service.details}</p>
            </div>
        </div>
    );
};

export default ServiceListCard;