import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const DashboardHeader = ({ name }) => {
    const { loggedInUser } = useContext(UserContext);
    return (
        <div className="dashboard-header d-flex justify-content-between"
            style={{ padding: '25px 45px', backgroundColor: 'white' }}
        >
            <h4>{name}</h4>
            <h5>{loggedInUser.displayName}</h5>
        </div>
    );
};

export default DashboardHeader;