import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import { app } from '../../../firebase/firebase.config';


const auth = getAuth(app);

const Register = () => {

    const handleSubmit=(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(auth,email,password)
        .then(res=>{
            const registerUser = res.user;
            e.target.reset();

            updateProfile(registerUser,{displayName: name})
            .then(res=>{
                alert("user created successfully");
            })
            .catch(er=>{
                console.log(er.message);
            })
            
        })
        .catch(er=>{
            console.log(er.message);
        })

        


    }

    return (
        <div className='flex h-screen flex-col gap-10 items-center justify-center'>
            <h2 className='text-4xl font-bold'>Please Register</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
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