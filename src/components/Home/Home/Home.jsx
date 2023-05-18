import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Carosole from '../carosole/Carosole';
import Footer from '../../Footer/Footer';
import Gallery from '../gallery/Gallery';
import Tabsection from '../Tabsection/Tabsection';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div className=''>
            <Navbar/>
            <Carosole/>
            <Gallery/>
            <Tabsection/>
            <Footer/>
        </div>
    );
};

export default Home;