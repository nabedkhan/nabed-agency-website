import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import './DashboardHeader.css';

const DashboardHeader = ({ name }) => {
    const { loggedInUser } = useContext(UserContext);
    return (
        <div className="dashboard-header d-flex justify-content-between align-items-center"
            style={{ padding: '25px 45px', backgroundColor: 'white' }}
        >
            <h4 className="mb-0">{name}</h4>
            <div className="profile-image">
                <img src={loggedInUser.photoURL} className="img-fluid" alt="" />
                <h5 className="d-inline-block ml-2 mb-0">{loggedInUser.displayName}</h5>
            </div>
        </div>
    );
};

export default DashboardHeader;