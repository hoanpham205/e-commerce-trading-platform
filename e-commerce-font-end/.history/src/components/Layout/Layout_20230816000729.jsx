import React from 'react';
import { useLocation } from 'react-router-dom';
import Routers from '../../routers/Routers';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = () => {
    const location = useLocation()
    return  <>
        {
            location.pathname.st
        }
        <Header/>
        <div>
            <Routers />
        </div>
        <Footer/>
   </>
}

export default Layout;
