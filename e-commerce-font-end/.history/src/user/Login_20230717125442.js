import React,{Component} from "react";

class Login extends Component {

    render() {
        if (this.props.authenticated) {
            return <Redirect></Redirect>
    }
}
