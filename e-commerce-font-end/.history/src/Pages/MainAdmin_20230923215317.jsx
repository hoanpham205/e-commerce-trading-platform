import React from 'react';
import MainDash from '../admin/MainDash/MainDash';
import Sidebar from '../components/Sidebar/Sidebar';
import RightSide from '../admin/RightSide/RightSide';

const MainAdmin = () => {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar/>
                <MainDash/>
                <RightSide/>
            </div>
        </div>
    );
}

export default MainAdmin;
