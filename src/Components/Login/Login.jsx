import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Login = () => {

    const [logUser , setUser] = useState(null);

    const handleGoogleSignIn =()=>{
        signInWithPopup(auth,googleProvider)
        .then(res=>{
            const logedUser = res.user;
            console.log(logedUser);
        })
        .catch(er=>{
            console.log(er.message);
        })
    }

    return (
        <div className='flex h-screen flex-col gap-10 items-center justify-center'>
            <h2 className='text-4xl font-bold'>Please Login</h2>
            <form className='flex flex-col gap-5'>
                <input className='input-field' type="email"  name='email' id='email' placeholder='your email' required/>
                <input className='input-field' type="password" name="password" id="password" placeholder='your pass'  required/>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>Don't Have Any Accounts ? <span><Link className='text-violet-600 font-semibold' to="/register">Click here To Create</Link></span></p>

            <div className="flex gap-10">
                <button onClick={handleGoogleSignIn} className='btn-submit'>
                    Login With Google 
                </button>
                <button className='btn-submit'>
                    Login With Github
                </button>
            </div>
        </div>
    );
};

export default Login;