import React from 'react';
import BrandLogo from '../BrandLogo/BrandLogo';
import Clients from '../Clients/Clients';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <BrandLogo />
            <Service />
            <Works />
            <Clients />
            <Footer />
        </div>
    );
};

export default Home;