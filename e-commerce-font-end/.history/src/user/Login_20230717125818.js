import React,{Component} from "react";

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
}
