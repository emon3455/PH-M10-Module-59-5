import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-sky-600 text-white md:text-xl flex justify-between px-4 py-2'>

            <h1 className='w-2/4 md:text-2xl text-xl font-bold'>Buy Dope</h1>

            <nav className='flex w-2/4 justify-between'>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
            
        </header>
    );
};

export default Header;