import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <div className="w-1/2 bg-gray-300">
          {/* GIF image */}
          <img
            src="https://financeadvisoras.com/assets/images/secure-login.gif"
            alt="GIF"
            className="h-screen object-cover"
          />
        </div>
        <div className="w-1/2 relative">
          {/* Registration form */}
          <div className="flex justify-center items-center h-full">
            <form className="w-3/4 p-8 bg-white shadow-md rounded-lg relative bg-gradient-to-br from-green-200 to-blue-100">
              <h2 className="text-2xl font-bold mb-6">Registration</h2>
              <div className="mb-4">
                <label  className="block mb-2 text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label  className="block mb-2 text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-4">
                <label  htmlFor="photourl" className="block mb-2 text-sm font-medium text-gray-700">
                  Photo URL
                </label>
                <input
                  type="url"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Give us Photo"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-300"
              >
                Register
              </button>
              <div className="text-center mt-4">
                <Link to="/login" className="text-blue-500 hover:underline">
                  Already have an account? Login
                </Link>
              </div>
              <div className="absolute top-0 left-0 h-6 w-6 bg-red-300"></div>
              <div className="absolute top-[95%] left-[97%] h-6 w-6 bg-yellow-500"></div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
