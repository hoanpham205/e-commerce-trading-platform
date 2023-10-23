import React from 'react';
import MainDash from '../admin/MainDash/MainDash';
import AdminDashboard from '../admin/AdminDashboard';
import RightSide from '../admin/RightSide/RightSide';

const MainAdmin = () => {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar/>
                <AdminDashboard/>
                <RightSide/>
            </div>
        </div>
    );
}

export default MainAdmin;
