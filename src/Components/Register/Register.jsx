import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex h-screen flex-col gap-10 items-center justify-center'>
            <h2 className='text-4xl font-bold'>Please Register</h2>
            <form className='flex flex-col gap-5'>
                <input className='input-field' type="text" name='name' id='name' placeholder='your name'/>
                <input className='input-field' type="email"  name='email' id='email' placeholder='your email' required/>
                <input className='input-field' type="password" name="password" id="password" placeholder='your pass'  required/>
                <input className='btn-submit' type="submit" value="Register" />
            </form>
            <p>Already Have An Accounts ? <span><Link className='text-violet-600 font-semibold' to="/login">Click here To Login</Link></span></p>
        </div>
    );
};

export default Register;