import React,{useEffect,useState} from "react"
import {Link} from "react-router-dom"
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
                        <Link>
                            
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}