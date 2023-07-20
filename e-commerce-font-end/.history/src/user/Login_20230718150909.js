import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Alert from 'react-s-alert';
import { ACCESS_TOKEN, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, GOOGLE_AUTH_URL } from '../../constants';
import fbLogo from '../../img/fb-logo.png';
import githubLogo from '../../img/github-logo.png';
import googleLogo from '../../img/google-logo.png';
import { login } from '../../util/APIUtils';

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
        const inputName = target.name;
        const inputValue = target.value;
        this.setState({[inputName]: inputValue});
    }
    handleSubmit(event){
        event.preventDefault();
        const loginRequest = Object.assign({}, this.state);
        login(loginRequest).then(response=>{
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            Alert.success("You're successfully logged in!")
            this.props.history.push('/');
        }).catch(error => {
            Alert.error((error&&error.message) || 'Oops! Something went wrong. Please try again!');
        })
    }
    render(){
        return(
            <form onSubmit
        )
    }
}
