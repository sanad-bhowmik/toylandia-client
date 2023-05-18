import React, { useState, useEffect } from 'react';
import useTitle from '../../hooks/useTitle';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './AllToys.css'
const AllToys = () => {
    useTitle('AllToys');
    const [toys, setToys] = useState([]);
    const [displayedToys, setDisplayedToys] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/toys?limit=20'); // Add the limit parameter here
            const data = await response.json();
            setToys(data);
            setDisplayedToys(data);
        };
        fetchData();
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSearchClick = () => {
        setDisplayedToys(filteredToys.slice(0, 20));
    };

    const filteredToys = toys.filter((toy) =>
        toy.toy_name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <Navbar />
            <div className="banner-container mb-10">
                <div className="banner-image">
                    <h1 className="banner-text"><span className='text-purple-600'>All</span>Toys</h1>
                </div>
            </div>
            <div className="flex items-center justify-center mb-10">
                <input
                    type="text"
                    placeholder="Search toys by name"
                    value={search}
                    onChange={handleSearch}
                    className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                    onClick={handleSearchClick}
                    type="submit"
                    className="px-4 py-2 bg-purple-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Search
                </button>
            </div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 container mx-auto mb-32">
                {displayedToys.map((toy) => (
                    <div key={toy._id} className="card card-side bg-base-100 shadow-xl">
                        <figure>
                            <img className='h-64 pt-4 pl-4 pb-4 rounded-2xl' src={toy.img} alt={toy.toy_name} />
                        </figure>
                        <div className="card-body text-2xl">
                            <h2 className="card-title font-bold text-blue-500 text-3xl">{toy.toy_name}</h2>
                            <p className="text-red-700">Price: ${toy.price}</p>
                            <p className="text-purple-700">Sub-category: {toy.sub_categories}</p>
                            <p className="text-green-700">Available Quantity: {toy.available_quantity}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary text-xl text-white">View Details</button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default AllToys;