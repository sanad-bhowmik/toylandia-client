import React, { useState, useEffect } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Tabsection = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then((response) => response.json())
            .then((data) => setToys(data));
    }, []);

    return (
        <div className='text-2xl container mx-auto mt-14 mb-10'>
            <Tabs>
                <TabList style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', borderBottom: '1px solid #ccc' }}>
                    <Tab><button className='text-2xl btn btn-info'>Math Toys</button></Tab>
                    <Tab><button className='text-2xl btn btn-accent'>Engineering Toys</button></Tab>
                    <Tab><button className='text-2xl btn btn-success'>Science Toys</button></Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-2 gap-4">
                        {toys.filter(toy => toy.sub_categoriesId === "1").map(filteredToy => (
                            <div key={filteredToy._id} className="card w-96 glass">
                                <figure><img src={filteredToy.img} alt={filteredToy.toy_name} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{filteredToy.toy_name}</h2>
                                    <p>Price: {filteredToy.price}</p>
                                    <p>Rating: {filteredToy.rating}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Learn now!</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>


                <TabPanel>
                    {toys.filter(toy => toy.sub_categoriesId === "2").map(filteredToy => (
                        <div key={filteredToy._id}>
                            <h2>{filteredToy.toy_name}</h2>
                            <img src={filteredToy.img} alt={filteredToy.toy_name} />
                            <p>Price: {filteredToy.price}</p>
                            <p>Rating: {filteredToy.rating}</p>
                        </div>
                    ))}
                </TabPanel>
                <TabPanel>
                    {toys.filter(toy => toy.sub_categoriesId === "3").map(filteredToy => (
                        <div key={filteredToy._id}>
                            <h2>{filteredToy.toy_name}</h2>
                            <img src={filteredToy.img} alt={filteredToy.toy_name} />
                            <p>Price: {filteredToy.price}</p>
                            <p>Rating: {filteredToy.rating}</p>
                        </div>
                    ))}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Tabsection;