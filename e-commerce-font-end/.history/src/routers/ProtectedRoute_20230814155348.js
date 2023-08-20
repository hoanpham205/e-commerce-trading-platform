import React from 'react';
import { Navigate } from 'react-router-dom';
import use


const ProtectedRoute =({children})=>{
    const {currentUser}= useAuth();
    return currentUser ? children : <Navigate to='/login'/>
}

export default ProtectedRoute;