import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomBtn from '../custon-button/custom-btn.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.style.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className= 'sign-in'>
                <h2 className= 'title' >I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form className= 'form' onSubmit= {this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} label='email' handleChange= {this.handleChange} required/>

                    <FormInput name='password' type='password' value={this.state.password} label='password' handleChange= {this.handleChange} required />
                    
                    <div className=  'buttons'>
                    <CustomBtn type='submit'>sign in</CustomBtn>
                    <CustomBtn onClick= {signInWithGoogle} isGoogleSignIn >sign in with google</CustomBtn>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn