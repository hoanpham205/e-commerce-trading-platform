import React,{Component} from "react";
import { GOOGLE_AUTH_URL } from "../constants";
import googleLogo 

class Login extends Component {

    render() {
        if (this.props.authenticated) {
            return <Redirect
                to={{pathname:"/",
                state:{from:this.props.location}
                }}
            />;
    }
    return (
        <div className="login-container" >
            <div className="login-content">
                <h1 className="login-title">Login to HTStore</h1>
            </div>
        </div>
    )
 }
}
class SocialLogin extends Component {
    render() {
        return (
            <div className="social-login">
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google" />Log in with Google
                </a>
            </div>
        )
    }
}
