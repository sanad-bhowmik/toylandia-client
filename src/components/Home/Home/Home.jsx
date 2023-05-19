import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Carosole from '../carosole/Carosole';
import Footer from '../../Footer/Footer';
import Gallery from '../gallery/Gallery';
import Tabsection from '../Tabsection/Tabsection';
import useTitle from '../../../hooks/useTitle';
import Marquee from "react-fast-marquee";
import Review from '../Review/Review';
import  { useState, useEffect } from 'react';

const Home = () => {
    useTitle('Home')
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetchToys();
    }, []);

    const fetchToys = () => {
        fetch('http://localhost:5000/toys')
            .then((response) => response.json())
            .then((data) => setToys(data));
    };

    return (
        <div className=''>
            <Navbar />
            <Carosole />
            <div className='mt-10 mb-24'>
                <h1 className='text-6xl mb-16 text-center font-serif underline'>Our Distributer</h1>
                <Marquee>
                    <div className='flex gap-6'>
                        <img className='h-40' src="https://www.middlesexresourcenet.org/rnMiddlesex/cache/file/5CC6402E-5056-A830-8C55DEBA7FDD3544.jpg" alt="" />
                        <img className='h-40' src="https://learnandplay.co.in/wp-content/uploads/2022/10/cropped-Learn-and-Play.png" alt="" />
                        <img  className='h-40'src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/326249267_5989454254411389_8433691899516997657_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHdhNXH7HUUshYKG1vbBNenrJaOjQ5LTjKslo6NDktOMuM9bx722L84ltgwoCO026PFZ0jioBS5VXhL0ZGiWCBW&_nc_ohc=bIqiuJilmEUAX8m8JH8&_nc_ht=scontent.fdac135-1.fna&oh=00_AfCq-3FWFBY0ucbhcmcNUUDRkPag_IWK5awtUut7Z86VHw&oe=646BEF3F" alt="" />
                        <img className='h-40' src="https://images-platform.99static.com//tfdQViA1WGorHjnrPEj0Mr7jX-U=/274x274:1654x1654/fit-in/500x500/99designs-contests-attachments/96/96680/attachment_96680655" alt="" />
                        <img className='h-40' src="https://play-lh.googleusercontent.com/5vAFRoVNm1diaqcsNWDjs6_8bKO5yVeyGLl3VAFVeo2-fKtTBK4v40XQ5Jn-eo5PJsY" alt="" />
                        <img className='h-40' src="https://upload.wikimedia.org/wikipedia/en/7/71/Wwo-logo-bldg-2010-cmyk-h1.jpg" alt="" />
                        <img className='h-40' src="https://i.pinimg.com/originals/e1/eb/ea/e1ebead3d5ce9dbe8240d628732021b3.png" alt="" />
                        <img className='h-40' src="https://images-platform.99static.com/OHcO3S0wICgFNpqJ6c5-DdLpIyY=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/87/87373/attachment_87373152" alt="" />
                    </div>
                </Marquee>
            </div>
            <Gallery />
            <Tabsection />
            <Review/>
            <Footer />
        </div>
    );
};

export default Home;