import React,{useEffect,useState} from "react"
import "./Admin.css";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
function User(){
    const [email, setSignInEmail] = useState("");
    const [password, setSignInPassword] = useState("");
    const handlesigninemailchange = (e) => {
        setSignInEmail(e.target.value);
      };
      const handlePwdChange = (e) => {
        setSignInPassword(e.target.value);
      };
      async function signin(e) {
        e.preventDefault();
        let item = { email, password };
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
                            type="email" className="form-control mt-1" placeholder="Enter your email address" name="email" value={email} onChange={handlesigninemailchange}                            
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password" className="form-control mt-1" placeholder="Enter password"  value={password} onChange={handlePwdChange}                            
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button className="btn btn-danger sub" type="submit" onChange={signin}>
                            Submit
                        </button>
                    </div>
                    <div className="row">
                        <div className="col-5">
                            <Link to="/adminsignin">
                                <button className="btn btn-danger adm">Admin Login</button>
                            </Link>
                        </div>
                        <div className="col-5">
                            <Link to="/adminsignin">
                                <button className="btn btn-danger adm">Admin Login</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}