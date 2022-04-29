import React from 'react';
import { signInWithGoogle } from '../firebase/config';
import logo from '../components/assets/signin.webp'
import './Login.css'

const Login = () => {
    return (
        <div className='login'>
            <img src={logo} alt="logo" loading='lazy' /> <br/>
            {/* importing sigingwithgoogle so the user can signin */}
            <button className='loginBtn' onClick={signInWithGoogle}>
                Sign in with Google
            </button>

        </div>
    )
}


export default Login;