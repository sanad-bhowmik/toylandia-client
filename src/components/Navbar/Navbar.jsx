import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-lime-100">
                <div className="flex-1">
                    <img className='h-10' src={logo} alt="" />
                </div>
                <div className="flex-none text-lg font-semibold">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link>All Toys</Link>
                            <Link>My Toys</Link>
                            <Link>Add A Toys</Link>
                            <Link to='/blog'>Blog</Link>
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;