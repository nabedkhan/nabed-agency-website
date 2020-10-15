import React from 'react';
import Banner from '../Banner/Banner';
import NavigationBar from '../NavigationBar/NavigationBar';
import './Header.css';

const Header = () => {
    return (
        <div className="header-area">
            <NavigationBar />
            <Banner />
        </div>
    );
};

export default Header;