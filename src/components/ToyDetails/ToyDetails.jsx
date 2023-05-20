import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import useTitle from '../../hooks/useTitle';

const ToyDetails = () => {
    useTitle('ToyDetails');
    const [toy, setToy] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then((response) => response.json())
            .then((data) => {
                const foundToy = data.find((toy) => toy._id === id);
                setToy(foundToy);
            });
    }, [id]);

    if (!toy) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="bg-gradient-to-r from-gray-200 via-green-300 to-purple-200">
                <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                            <span className="animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-black to-black">
                                {toy.toy_name}
                            </span>
                        </h1>
                        <div className="mt-6">
                            <img
                                src={toy.img}
                                alt={toy.toy_name}
                                className="mx-auto rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="mt-14 text-white flex gap-24">
                            <button className="btn gap-2 text-3xl bg-gradient-to-r from-red-300 to-blue-100 text-black">
                                Price:
                                <div className="text-3xl">${toy.price}</div>
                            </button>
                            <button className="bg-gradient-to-r from-lime-200 to-green-200 text-black btn gap-2 text-3xl">
                                Rating:
                                <div className="text-3xl">{toy.rating}</div>
                            </button>
                            <button className="btn gap-2 text-3xl bg-gradient-to-r from-purple-300 to-cyan-200 text-black">
                                Available:
                                <div className="text-3xl">{toy.available_quantity}</div>
                            </button>
                        </div>
                        <div className="mt-24">
                            <h2 className="text-4xl font-bold text-black">Seller Information</h2>
                            <div className="card card-side mt-6 bg-gradient-to-r from-blue-500 to-purple-500 shadow-xl">
                                <div className="card-body">
                                    <h2 className="text-center text-4xl font-serif font-bold text-white">{toy.seller_name}</h2>
                                    <h2 className="text-center text-3xl text-white">{toy.seller_email}</h2>
                                    <p className="text-lg text-white">{toy.description}</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ToyDetails;
