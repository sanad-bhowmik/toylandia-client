import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Tabsection = () => {
    return (
        <div className='text-2xl container mx-auto mt-14 mb-10'>
            <Tabs>
                <TabList style={{ display: 'flex', justifyContent: 'space-between',marginBottom: '30px', borderBottom: '1px solid #ccc' }}>
                    <Tab><button className='text-2xl btn btn-info'>Title 1</button></Tab>
                    <Tab><button className='text-2xl btn btn-accent'>Title 2</button></Tab>
                    <Tab><button className='text-2xl btn btn-success'>Title 3</button></Tab>
                </TabList>

                <TabPanel>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto veniam perferendis sit consequatur vero, corrupti recusandae! Asperiores accusamus earum dolorum.</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Tabsection;
