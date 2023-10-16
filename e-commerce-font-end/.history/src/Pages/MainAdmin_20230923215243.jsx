import React from 'react';
import MainDash from '../components/MainDash';

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
