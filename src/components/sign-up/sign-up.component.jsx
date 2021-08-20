import React from 'react';
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import "./sign-up.styles.scss";

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">
                    I do not have account
                </h2>
                <span>Sign up with your emamil and password</span>
                <form action="" className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Display Name" required/>
                    <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="email" required/>
                    <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="password" required/>
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="confirm password" required/>
                </form>
            </div>
        )
    }
}