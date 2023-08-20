import React,{Component} from "react";
import { GOOGLE_AUTH_URL } from "../constants";
import { FACEBOOK_AUTH_URL } from "../constants";
import { GITHUB_AUTH_URL } from "../constants";
import googleLogo from '../../img/google-logo.png';
import githubLogo from '../../img/github-logo.png';
import fbLogo from '../../img/fb-logo.png';

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
                <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                    <img src={fbLogo} alt="Facebook" /> Log in with Facebook</a>
                <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
                    <img src={githubLogo} alt="Github" /> Log in with Github</a>
            </div>
        )
    }
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event){
        const target = event.target;
        const in
    }
}
