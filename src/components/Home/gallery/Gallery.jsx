import React from 'react';
import './Gallery.css'

const Gallery = () => {
    return (
        <section className='mt-24'>
            <h1 className='text-7xl mb-10 text-center font-serif'>Gallery</h1>
            <div className="flex lg:flex-wrap">
                <div className="flex ml-[15%] mr-[2%]">
                    <div>
                        <div className="p-4 shadow-lg bg-gradient-to-r from-slate-300 to-slate-100 h-80 w-80 rounded-xl">
                            <img className="h-full w-full object-cover rounded-xl" src="https://img.freepik.com/free-photo/kids-home-playing-with-toys_23-2148630637.jpg" alt="" />
                        </div>
                        <div className="p-4 mt-8 shadow-lg bg-gradient-to-r from-slate-300 to-slate-100 h-120 w-80 rounded-xl ">
                            <img className="h-full w-full object-cover rounded-xl" src="https://img.freepik.com/free-photo/full-shot-kid-playing-with-wooden-toy_23-2149357211.jpg" alt="" />
                        </div>
                    </div>
                    <div className="ml-8">
                        <div className="p-4 mt-8 shadow-lg bg-pink-100 h-320 w-80 rounded-xl ">
                            <img className="h-full w-full object-cover rounded-xl" src="https://post.healthline.com/wp-content/uploads/2019/07/toddlers_playing-732x549-thumbnail.jpg" alt="" />
                        </div>
                        <div className="p-4 mt-8 shadow-lg bg-gradient-to-r from-slate-300 to-slate-100 h-80 w-80 rounded-xl ">
                            <img className="h-full w-full object-cover rounded-xl" src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/parenting/1296x728_6_Types_of_Play_Important_to_Your_Childs_Development-IMAGE_4.jpg?w=1155&h=1528" alt="" />
                        </div>
                    </div>
                    <div className="ml-8">
                        <div className="p-4 mt-8 shadow-lg bg-pink-100 h-320 w-80 rounded-xl ">
                            <img className="h-full w-full object-cover rounded-xl" src="https://i.ebayimg.com/00/s/MTUzNlgxNTM2/z/si8AAOSwojJhPwXR/$_57.JPG?set_id=8800005007" alt="" />
                        </div>
                        <div className="p-4 mt-8 shadow-lg bg-pink-100 h-240 w-80 rounded-xl ">
                            <img className="h-full w-full object-cover rounded-xl" src="https://media.istockphoto.com/id/1126346658/photo/boy-playing-with-building-blocks.jpg?s=612x612&w=0&k=20&c=k2s9cLdX4GzVPQy6Gf3TttYAl2hEISYH3ssTqE88Wno=" alt="" />
                        </div>
                    </div>
                    <div className="ml-8">
                        <div className="p-4 mt-8 shadow-lg bg-gradient-to-r from-slate-300 to-slate-100 h-80 w-80 rounded-xl ">
                            <img className="h-full w-full object-cover rounded-xl" src="https://img.freepik.com/free-photo/kid-playing-with-cubes_23-2148131019.jpg" alt="" />
                        </div>
                        <div className="p-4 mt-8 shadow-lg bg-gradient-to-r from-slate-300 to-slate-100 h-200 w-80 rounded-xl ">
                            <img className="h-full w-full object-cover rounded-xl" src="https://img.freepik.com/premium-photo/thoughtful-little-boy-play-with-puzzle-cubes-toy-brain-logical-mind-training-creative-game-solving-complex-problems_266732-28462.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
