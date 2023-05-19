import React, { useState, useEffect } from 'react';
import useTitle from '../../hooks/useTitle';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './AllToys.css'
import ToyDetailsModal from '../ToyDetailsModal/ToyDetailsModal';
const AllToys = () => {
    useTitle('AllToys');
    const [toys, setToys] = useState([]);
    const [displayedToys, setDisplayedToys] = useState([]);
    const [search, setSearch] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedToy, setSelectedToy] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/toys?limit=20'); // Add the limit parameter here
            const data = await response.json();
            setToys(data);
            setDisplayedToys(data);
        };
        fetchData();
    }, []);

    const handleViewDetails = (toy) => {
        setSelectedToy(toy);
        setModalOpen(true);
    };

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
                    <h1 className="banner-text">
                        <span className="text-purple-600">All</span>Toys
                    </h1>
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
                    className="px-4 py-2 bg-purple-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Search
                </button>
            </div>
            <div className="container mx-auto mb-32">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Image
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Toy Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Price
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Sub-category
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Available Quantity
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Seller Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedToys.map((toy) => (
                            <tr key={toy._id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <img
                                        className="h-32 w-32 rounded-full"
                                        src={toy.img}
                                        alt={toy.toy_name}
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{toy.toy_name}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-red-700">${toy.price}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-purple-700">{toy.sub_categories}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-green-700">{toy.available_quantity}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{toy.seller_name}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button
                                        className="btn btn-primary text-xl text-white"
                                        onClick={() => handleViewDetails(toy)}
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
            <Footer />
            {modalOpen && <ToyDetailsModal toy={selectedToy} closeModal={() => setModalOpen(false)} />}
        </div>

    );
};

export default AllToys;