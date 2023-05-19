import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../providers/AuthProviders';

const Mytoys = () => {
    useTitle('MyToys')
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    // Check if the user is not null before accessing the email property
    const userEmail = user ? user.email : '';
    const url = `http://localhost:5000/toys?seller_email=${userEmail}`;

    useEffect(() => {
        // Only fetch data if the user is not null
        if (user) {
            fetch(url)
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }, [user]) // Add user as a dependency to useEffect

    return (
        <div>
            <Navbar />

        </div>
    );
};

export default Mytoys;