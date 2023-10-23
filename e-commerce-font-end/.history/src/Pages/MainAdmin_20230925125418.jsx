import React from 'react';
import MainDash from '../admin/MainDash/MainDash';
import AdminDashboard from '../admin/AdminDashboard';
import RightSide from '../admin/RightSide/RightSide';
import 

const MainAdmin = () => {
    return (
        <div className="admin">
            <div className="glass">
                <AdminDashboard/>
                <MainDash/>
                <RightSide/>
            </div>
        </div>
    );
}

export default MainAdmin;
