import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import qus from '../../assets/question-mark.png';
import ans from '../../assets/answer.png'
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-10 mb-10 font-mono">
                <img className='h-[180px] ml-[40%] mb-10' src={ans} alt="" />
                <div className="bg-purple-50 mb-10 pt-6 pl-6 pb-6 pr-6">
                    <h1 className='text-3xl font-bold'><img className='h-6' src={qus} alt="" /> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                    <p className='mt-4 text-xl'> <span className='font-bold'>Ans:</span> An access token is a credential that grants access to a resource, while a refresh token is used to obtain a new access token. They work by being passed along with requests to an API and validated by the server. Access tokens should be stored in memory or a secure cookie on the client-side, while refresh tokens should be stored securely on the server-side. In a MongoDB-React stack, access and refresh tokens can be implemented using a JWT (JSON Web Token) and stored in local storage or a cookie on the client-side.</p>
                </div>
                <div className="bg-cyan-50 mb-10 pt-6 pl-6 pb-6 pr-6">
                    <h1 className='text-3xl font-bold'><img className='h-6' src={qus} alt="" /> Compare SQL and NoSQL databases?</h1>
                    <p className='mt-4 text-xl'> <span className='font-bold'>Ans:</span> SQL and NoSQL databases are both used for storing and managing data, but they differ in their data models and query languages. SQL databases are relational and use SQL for querying, while NoSQL databases are non-relational and use various query languages. SQL databases are good for structured data with fixed schemas, while NoSQL databases are better for unstructured or semi-structured data with flexible schemas. SQL databases are usually vertically scalable, while NoSQL databases are horizontally scalable.</p>
                </div>
                <div className="bg-blue-50 mb-10 pt-6 pl-6 pb-6 pr-6">
                    <h1 className='text-3xl font-bold'><img className='h-6' src={qus} alt="" /> What is express js? What is Nest JS?</h1>
                    <p className='mt-4 text-xl'> <span className='font-bold'>Ans:</span> Express is a minimalist web framework for Node.js, allowing developers to build web applications and APIs easily. Nest.js is a Node.js framework that leverages TypeScript, providing a scalable architecture for building server-side applications, APIs, and microservices. It follows the MVC (Model-View-Controller) pattern and is built on top of Express.js.</p>
                </div>
                <div className="bg-yellow-50 mb-10 pt-6 pl-6 pb-6 pr-6">
                    <h1 className='text-3xl font-bold'><img className='h-6' src={qus} alt="" /> What is MongoDB aggregate and how does it work?</h1>
                    <p className='mt-4 text-xl'> <span className='font-bold'>Ans:</span> MongoDB aggregate is a pipeline-based framework for data aggregation. It allows users to process and combine multiple documents in a collection to produce a single result. The pipeline consists of stages that perform various operations such as filtering, grouping, sorting, and more.</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blog;
