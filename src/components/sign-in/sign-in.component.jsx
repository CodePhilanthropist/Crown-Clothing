import React, { Component } from 'react'
import { FormInput } from '../form-input/form-input.component';

export class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: "", password: ""});
    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an acount</h2>
                <span>Sign in with your email and password</span>
                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="email" value={this.state.email} handleChange={this.handleChange} required/>
                    <label>Email</label>
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} required/>
                    <label>Password</label>

                    <input type="submit" value="Submit" onChange={this.handleChange}/>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;
