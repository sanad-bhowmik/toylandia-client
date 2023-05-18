import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { AuthContext } from '../providers/AuthProviders';

const auth = getAuth(app)

const Navbar = () => {
    const [photoURL, setPhotoURL] = useState('');
    const [displayName, setDisplayName] = useState('');
    const { user, setUser } = useContext(AuthContext) // Add setUser here

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                setDisplayName(user.displayName);
                setPhotoURL(user.photoURL);
            } else {
                setUser(null);
                setDisplayName('');
                setPhotoURL('');
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);
    return (
        <>
            <div className="navbar bg-lime-100">
                <div className="flex-1">
                    <img className="h-10" src={logo} alt="" />
                </div>
                <div className="flex-none text-lg font-semibold">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {user && (
                            <li tabIndex={0}>
                                <Link to='/alltoys'>All Toys</Link>
                                <Link>My Toys</Link>
                                <Link>Add A Toys</Link>
                                <Link to="/blog">Blog</Link>
                            </li>
                        )}
                        <li>
                            {user ? (
                                <div className="relative">
                                    <div className="group relative flex justify-center">
                                        <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <img className="w-10 rounded-full" src={user.photoURL} alt={user.displayName} />
                                        </button>
                                        <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                                            {user.displayName}
                                        </span>
                                    </div>
                                    <button onClick={() => auth.signOut()} className="btn btn-accent">
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <Link to="/login">Login</Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;