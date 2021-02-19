import React from 'react'

import './sign-up.style.scss'

import FormInput from '../form-input/form-input.component'
import CustomBtn from '../custon-button/custom-btn.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert("password don't match")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName })

            this.setState({ displayName: '', email: '', password: '', confirmPassword: '' })
        }

        catch (error) {
            console.error(error);
        }

    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className= 'sign-up'>
                <h2 className= 'sign-up-title' >sign up with email and password</h2>

                <form onSubmit= {this.handleSubmit}>
                    <FormInput name='displayName' type='text' value={this.state.displayName} label='display name' handleChange= {this.handleChange} required/>

                    <FormInput name='email' type='email' value={this.state.email} label='email' handleChange= {this.handleChange} required/>

                    <FormInput name='password' type='password' value={this.state.password} label='password' handleChange= {this.handleChange} required />

                    <FormInput name='confirmPassword' type='password' value={this.state.confirmPassword} label='confirm Password' handleChange= {this.handleChange} required/>
                    
                    <div className=  'buttons'>
                    <CustomBtn type='submit'>sign up</CustomBtn>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp