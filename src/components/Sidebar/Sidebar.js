import React from 'react';
import './Sidebar.css';
import { FiShoppingCart, FiPlus } from 'react-icons/fi';
import { RiShoppingBasket2Line } from 'react-icons/ri';
import { BiCommentDots, BiUserPlus } from 'react-icons/bi';
import logo from '../../logo.png';
import { Link, useParams } from 'react-router-dom';

const Sidebar = () => {
    const { name } = useParams();
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={logo} className="img-fluid" alt="" />
            </div>

            <div className="menu-list mt-5">
                <Link to={`/dashboard/order/${name}`} className="menu-item d-flex align-items-center mb-3">
                    <FiShoppingCart style={{ fontSize: '27px' }} />
                    <p className="mb-0 ml-2">Order</p>
                </Link>
                <Link to="/dashboard/service-list" className="menu-item d-flex align-items-center mb-3">
                    <RiShoppingBasket2Line style={{ fontSize: '27px' }} />
                    <p className="mb-0 ml-2">Service list</p>
                </Link>
                <Link to="/dashboard/review" className="menu-item d-flex align-items-center mb-3">
                    <BiCommentDots style={{ fontSize: '27px' }} />
                    <p className="mb-0 ml-2">Review</p>
                </Link>
                <Link to="/dashboard/all-services" className="menu-item d-flex align-items-center mb-3">
                    <RiShoppingBasket2Line style={{ fontSize: '27px' }} />
                    <p className="mb-0 ml-2">All Services</p>
                </Link>
                <Link to="/dashboard/add-service" className="menu-item d-flex align-items-center mb-3">
                    <FiPlus style={{ fontSize: '27px' }} />
                    <p className="mb-0 ml-2">Add Service</p>
                </Link>
                <Link to="/dashboard/make-admin" className="menu-item d-flex align-items-center mb-3">
                    <BiUserPlus style={{ fontSize: '27px' }} />
                    <p className="mb-0 ml-2">Make Admin</p>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;