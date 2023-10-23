import React from 'react';
import MainDash from '../components/MainDash/MainDash';
import Sidebar from '../components/Sidebar/Sidebar';
import Righ

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
