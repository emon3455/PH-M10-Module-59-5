import React from 'react';
import { getAuth } from "firebase/auth";
import { app } from '../../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app);


const Login = () => {



    return (
        <div className='flex h-screen flex-col gap-10 items-center justify-center'>
            <h2 className='text-4xl font-bold'>Please Login</h2>
            <form className='flex flex-col gap-5'>
                <input className='input-field' type="email"  name='email' id='email' placeholder='your email' required/>
                <input className='input-field' type="password" name="password" id="password" placeholder='your pass'  required/>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>Don't Have Any Accounts ? <span><Link className='text-violet-600 font-semibold' to="/register">Click here To Create</Link></span></p>
        </div>
    );
};

export default Login;