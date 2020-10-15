import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../logo.png';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <div className="navigation-bar">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Navbar expand="lg">
                            <Navbar.Brand href="#home">
                                <img src={logo} className="img-fluid" alt="" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <Link to="/" className="nav-link">Home</Link>
                                    <Link to="" className="nav-link">Our Portfolio</Link>
                                    <Link to="" className="nav-link">Our Team</Link>
                                    <Link to="" className="nav-link">Contact Us</Link>
                                    <Link to="/login" className="nav-link">Login</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;