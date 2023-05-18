import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const ToyDetails = () => {
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
    return <div><progress className="progress w-56"></progress></div>;
  }

  return (
    <div>
      <Navbar />
      <h1>{toy.toy_name}</h1>
      <img src={toy.img} alt={toy.toy_name} />
      <p>Price: ${toy.price}</p>
      <p>Rating: {toy.rating}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ToyDetails;