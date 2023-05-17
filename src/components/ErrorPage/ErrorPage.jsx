import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="relative">
      <img
        className="ml-[0%] w-[100%]"
        src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif"
        alt=""
      />
      <Link
        to="/"
        className="btn glass absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-900 text-white py-2 px-4 rounded-lg shadow-md">
        Go back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
