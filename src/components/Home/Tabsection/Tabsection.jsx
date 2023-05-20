import React, { useState, useEffect } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import star from '../../../assets/star.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tabsection = ({ user, loggedIn }) => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('https://toylandia-server-sanad-bhowmik.vercel.app/toys')
      .then((response) => response.json())
      .then((data) => setToys(data));
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto mt-14 mb-10 px-4">
      <Tabs>
        <TabList
          className="flex flex-wrap justify-center mb-4 border-b-2 border-gray-300"
          role="tablist"
        >
          <Tab>
            <button className="text-2xl btn btn-info">Math Toys</button>
          </Tab>
          <Tab>
            <button className="text-2xl btn btn-accent">Engineering Toys</button>
          </Tab>
          <Tab>
            <button className="text-2xl btn btn-success">Science Toys</button>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {toys
              .filter((toy) => toy.sub_categoriesId === '1')
              .map((filteredToy) => (
                <div key={filteredToy._id} className="card w-full md:w-1/2 glass">
                  <figure>
                    <img src={filteredToy.img} alt={filteredToy.toy_name} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{filteredToy.toy_name}</h2>
                    <p>Price: ${filteredToy.price}</p>
                    <p>
                      Rating: {filteredToy.rating}
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star bg-yellow-600"
                        />
                      </div>
                    </p>
                    <div className="card-actions justify-end">
                      <Link to={`/toy/${filteredToy._id}`} className="btn btn-primary">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {toys
              .filter((toy) => toy.sub_categoriesId === '2')
              .map((filteredToy) => (
                <div key={filteredToy._id} className="card w-full md:w-1/2 glass">
                  <figure>
                    <img src={filteredToy.img} alt={filteredToy.toy_name} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{filteredToy.toy_name}</h2>
                    <p>Price: ${filteredToy.price}</p>
                    <p>
                      Rating: {filteredToy.rating}
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star bg-yellow-600"
                        />
                      </div>
                    </p>
                    <div className="card-actions justify-end">
                      <Link to={`/toy/${filteredToy._id}`} className="btn btn-primary">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {toys
              .filter((toy) => toy.sub_categoriesId === '3')
              .map((filteredToy) => (
                <div key={filteredToy._id} className="card w-full md:w-1/2 glass">
                  <figure>
                    <img src={filteredToy.img} alt={filteredToy.toy_name} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{filteredToy.toy_name}</h2>
                    <p>Price: ${filteredToy.price}</p>
                    <p>
                      Rating: {filteredToy.rating}
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star bg-yellow-600"
                        />
                      </div>
                    </p>
                    <div className="card-actions justify-end">
                      <Link to={`/toy/${filteredToy._id}`} className="btn btn-primary">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Tabsection;
