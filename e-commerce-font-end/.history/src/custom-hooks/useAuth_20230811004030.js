import React,{useState, useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
const useAuth = () => {
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() =>{
        onAuthStateChanged(currentUser, setCurrentUser());
    })
    return (
        <div></div>
    )
}