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
                <form action="">
                    <input type="text" className="email" name="email" value={this.state.email} required/>
                    <label htmlFor="email">Email</label>
                    <input type="password" className="password" name="password" value={this.state.password} required/>
                    <label htmlFor="password">Password</label>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;
