import React from 'react';
import './Carosole.css'
const Carosole = () => {
    return (
        <div className="text-black carousel w-full h-[100px]">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='ml-[300px] mt-[98px]'>
                    <div className="flex">
                        <div>
                            <div className="p-4 shadow-lg shadow-lg bg-gradient-to-r from-slate-300 to-slate-100 h-[136px] w-[300px] rounded-xl"></div>
                            <div className="p-4 mt-[30px] shadow-lg bg-purple-100 h-[456px] w-[300px] rounded-xl">
                                <img className="pl-[46px] mt-[90px] h-[60%] rounded-lg  w-[80%]" src="https://coimages.sciencemuseumgroup.org.uk/images/8/24/medium_1913_0532__0002_.jpg" alt="" />
                            </div>
                        </div>
                        <div className="ml-[30px]">
                            <div className="p-4 mt-[30px] shadow-lg bg-purple-100 h-[456px] w-[300px] rounded-xl ">
                                <img className="pl-[46px] mt-[90px] h-[60%] rounded-lg  w-[80%]" src="https://sharpbrainseducation.com/wp-content/uploads/2023/01/abacusa2.jpg" alt="" />
                            </div>
                            <div className="p-4 mt-[30px] shadow-lg bg-gradient-to-r from-slate-300 to-slate-100 h-[136px] w-[300px] rounded-xl "></div>
                        </div>
                    </div>
                </div>
                <div className=' mt-[250px] ml-[125px] '>
                    <h1 className='text-5xl font-bold pb-4 '>"Play is the highest form of research."<br /><span className='text-purple-600'>-Albert Einstein</span></h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='ml-[300px] mt-[98px]'>
                    <div className="flex">
                        <div>
                            <div className="p-4 shadow-lg shadow-lg bg-gradient-to-r from-slate-300 to-slate-100 h-[136px] w-[300px] rounded-xl"></div>
                            <div className="p-4 mt-[30px] shadow-lg bg-purple-100 h-[456px] w-[300px] rounded-xl">
                                <img className="pl-[46px] mt-[90px] h-[60%] rounded-lg  w-[80%]" src="https://coimages.sciencemuseumgroup.org.uk/images/8/24/medium_1913_0532__0002_.jpg" alt="" />
                            </div>
                        </div>
                        <div className="ml-[30px]">
                            <div className="p-4 mt-[30px] shadow-lg bg-purple-100 h-[456px] w-[300px] rounded-xl ">
                                <img className="pl-[46px] mt-[90px] h-[60%] rounded-lg  w-[80%]" src="https://sharpbrainseducation.com/wp-content/uploads/2023/01/abacusa2.jpg" alt="" />
                            </div>
                            <div className="p-4 mt-[30px] shadow-lg bg-gradient-to-r from-slate-300 to-slate-100 h-[136px] w-[300px] rounded-xl "></div>
                        </div>
                    </div>
                </div>
                <div className=' mt-[250px] ml-[125px] '>
                    <h1 className='text-5xl font-bold pb-4 '>"Children learn as they play. Most importantly, in play children learn how to learn."<br /><span className='text-red-600'>-Fred Donaldson</span></h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle ">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='ml-[300px] mt-[98px]'>
                    <div className="flex">
                        <div>
                            <div className="p-4 shadow-lg shadow-lg bg-gradient-to-r from-slate-300 to-slate-100 h-[136px] w-[300px] rounded-xl"></div>
                            <div className="p-4 mt-[30px] shadow-lg bg-purple-100 h-[456px] w-[300px] rounded-xl">
                                <img className="pl-[46px] mt-[90px] h-[60%] rounded-lg  w-[80%]" src="https://coimages.sciencemuseumgroup.org.uk/images/8/24/medium_1913_0532__0002_.jpg" alt="" />
                            </div>
                        </div>
                        <div className="ml-[30px]">
                            <div className="p-4 mt-[30px] shadow-lg bg-purple-100 h-[456px] w-[300px] rounded-xl ">
                                <img className="pl-[46px] mt-[90px] h-[60%] rounded-lg  w-[80%]" src="https://sharpbrainseducation.com/wp-content/uploads/2023/01/abacusa2.jpg" alt="" />
                            </div>
                            <div className="p-4 mt-[30px] shadow-lg bg-gradient-to-r from-slate-300 to-slate-100 h-[136px] w-[300px] rounded-xl "></div>
                        </div>
                    </div>
                </div>
                <div className=' mt-[250px] ml-[125px] '>
                    <h1 className='text-5xl font-bold pb-4 '>
                        "Education is not preparation for life; education is life itself."<br /><span className='text-green-600'> John Dewey</span></h1>
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