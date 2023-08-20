import React from 'react';
import { Navigate } from 'react-router-dom';
import 


const ProtectedRoute =({children})=>{
    const {currentUser}= useAuth();
    return currentUser ? children : <Navigate to='/login'/>
}

export default ProtectedRoute;