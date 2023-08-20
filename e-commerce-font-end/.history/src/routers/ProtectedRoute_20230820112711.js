import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../custom-hooks/useAuth';
import { useSelector } from 'react-redux';


const ProtectedRoute =()=>{
    const {currentUser}= useSelector(auth);
    return currentUser ? <Outlet/> : <Navigate to='/login'/>
}

export default ProtectedRoute;