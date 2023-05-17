import React from 'react';
import './Carosole.css'
const Carosole = () => {
    return (
            <div className="text-black carousel w-full h-[100px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='ml-[300px] mt-[166px]'>
                        <img className=' h-[60%]' src="https://sc01.alicdn.com/kf/Ue86ffbe4466f4ff58c67735a017be8751.jpg" alt="" />
                    </div>
                    <div className=' mt-[250px] ml-[125px] '>
                        <h1 className='text-7xl font-bold pb-4'>Cri<span className='text-red-600'>cket</span></h1>
                        <p className='w-[455px] h-[120px]'>Customized kids Toys Plastic Cricket Bat Sets Indoor Outdoor Sports Cricket</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='ml-[300px] mt-[166px]'>
                        <img className=' h-[60%]' src="https://static-01.daraz.com.bd/p/5c117d92ac023bad1500a7bbe3642992.jpg" alt="" />
                    </div>
                    <div className=' mt-[250px] ml-[125px] '>
                        <h1 className='text-7xl font-bold pb-4'>Foot<span className='text-purple-500'>ball</span></h1>
                        <p className='w-[455px] h-[120px]'>Table Top Football Toy Children for Kids Boy</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle ">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='ml-[300px] mt-[166px]'>
                        <img className=' h-[60%]' src="https://m.media-amazon.com/images/I/61r74Jv-X2S._SL1400_.jpg" alt="" />
                    </div>
                    <div className=' mt-[250px] ml-[125px] '>
                        <h1 className='text-7xl font-bold pb-4'>Ten<span className='text-green-600'>nis</span></h1>
                        <p className='w-[455px] h-[120px]'>ennis Racket Set for Kids with Ball Outdoor and Indoor Sports Tennis Toys for Toddler or Children Pack </p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle ">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
    );
};

export default Carosole;