import React from 'react';
import Routers from '../../routers/Routers';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation()
    return  <>
        {
            loca
        }
        <Header/>
        <div>
            <Routers />
        </div>
        <Footer/>
   </>
}

export default Layout;
