import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Carosole from '../carosole/Carosole';
import Footer from '../../Footer/Footer';
import Gallery from '../gallery/Gallery';

const Home = () => {
    return (
        <div className=''>
            <Navbar/>
            <Carosole/>
            <Gallery/>
            <Footer/>
        </div>
    );
};

export default Home;