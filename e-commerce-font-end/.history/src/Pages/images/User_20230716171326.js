import React,{useEffect,useState} from "react"
import "./Admin.css";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
function User(){

    return(
        <div className="Auth-form-container">
            <h3 className="position-absolute start-0 top-0 title">
                Welcome to HT-Store!
            </h3>
            <form className="Auth-form">
                <div className="Auth-form" >
                    <h3 className="Auth-form-title">User Sign in</h3>
                    <div className="text-center text-white">
                        <label className="me-1">Not registered yet?</label>
                        <Link to="/auth">
                            <span className="link-primary">Sign Up</span>
                        </Link>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email" className="form-control mt-1" placeholder="Enter your email address"                           
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}