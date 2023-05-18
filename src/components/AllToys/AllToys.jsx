import React, { useState, useEffect } from 'react';
import useTitle from '../../hooks/useTitle';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const AllToys = () => {
  useTitle('AllToys');
  const [toys, setToys] = useState([]);
  const [displayedToys, setDisplayedToys] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/toys');
      const data = await response.json();
      setToys(data);
      setDisplayedToys(data.slice(0, 20));
    };
    fetchData();
  }, []);

  const handleSearch =(e) => {
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
      <h1>AllToys</h1>
      <input
        type="text"
        placeholder="Search toys by name"
        value={search}
        onChange={handleSearch}
      />
      <button onClick={handleSearchClick}>Search</button>
      <ul>
        {displayedToys.map((toy) => (
          <li key={toy._id}>
            <img src={toy.img} alt={toy.toy_name} />
            <h2>{toy.toy_name}</h2>
            <p>Price: ${toy.price}</p>
            <p>Rating: {toy.rating}</p>
            <p>Sub-category: {toy.sub_categories}</p>
            <p>Available Quantity: {toy.available_quantity}</p>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default AllToys;