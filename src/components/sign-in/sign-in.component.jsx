import React, { Component } from 'react'
import { FormInput } from '../form-input/form-input.component';
import "./sign-in.styles.scss";
import { CustomButton } from '../custom-button/custom-button.component';
import { auth ,signInWithGoogle } from '../../firebase/firebase.utils';

export class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: "", password: ""});
        }catch(error){

        }

       
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
                    <FormInput type="text" name="email" value={this.state.email} handleChange={this.handleChange} label="email" required/>
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="password" required/>

                    <div className="buttons">
                    <CustomButton type="submit" value="Submit" onChange={this.handleChange}> Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;
