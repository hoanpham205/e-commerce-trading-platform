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
        <div className="login" >

        </div>
    )
}
