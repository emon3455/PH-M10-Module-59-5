import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup ,GithubAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {

    const [logUser , setLogUser] = useState(null);

    const handleGoogleSignIn =()=>{
        setLogUser(null)
        signInWithPopup(auth,googleProvider)
        .then(res=>{
            const logedUser = res.user;
            setLogUser(logedUser);
        })
        .catch(er=>{
            console.log(er.message);
        })
    }

    const handleLoginWithGithub = ()=>{
        setLogUser(null)
        signInWithPopup(auth,githubProvider)
        .then(res=>{
            const logedUser = res.user;
            setLogUser(logedUser);
        })
        .catch(er=>{
            console.log(er.message);
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth,email,password)
        .then(res=>{
            const logedUser = res.user;
            setLogUser(logedUser);
            e.target.reset();
            console.log(logedUser);
        })
        .catch(er=>{
            console.log(er.message);
        })

    }


    return (
        <div className='flex h-screen flex-col gap-10 items-center justify-center'>
            <h2 className='text-4xl font-bold'>Please Login</h2>
            <h4 className={`text-2xl font-medium ${logUser ? 'block' : 'hidden'} `}>
                 
                Welcome: {logUser && <span>{logUser?.email}</span> || <span>{logUser?.displayName}</span>}
                 
            </h4>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <input className='input-field' type="email"  name='email' id='email' placeholder='your email' required/>
                <input className='input-field' type="password" name="password" id="password" placeholder='your pass'  required/>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>Don't Have Any Accounts ? <span><Link className='text-violet-600 font-semibold' to="/register">Click here To Create</Link></span></p>

            <div className="flex gap-10">
                <button onClick={handleGoogleSignIn} className='btn-submit'>
                    Login With Google 
                </button>
                <button onClick={handleLoginWithGithub} className='btn-submit'>
                    Login With Github
                </button>
            </div>
        </div>
    );
};

export default Login;