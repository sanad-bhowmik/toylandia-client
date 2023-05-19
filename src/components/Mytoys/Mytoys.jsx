import React from 'react';
import Navbar from '../Navbar/Navbar';
import useTitle from '../../hooks/useTitle';

const Mytoys = () => {
    useTitle('MyToys')
    return (
        <div>
            <Navbar/>
            
        </div>
    );
};

export default Mytoys;