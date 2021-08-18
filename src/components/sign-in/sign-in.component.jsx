import React, { Component } from 'react'

export class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an acount</h2>
                <span>Sign in with your email and password</span>
            </div>
        )
    }
}

export default SignIn;
