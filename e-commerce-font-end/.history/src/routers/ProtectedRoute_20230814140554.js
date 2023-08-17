import React from "react"
import {useAuth} from '../custom-hooks/useAuth'
import { Navigate } from "react-router-dom"


const ProtectedRoute =({children})=>{
    
    return {children}
}

export default ProtectedRoute;