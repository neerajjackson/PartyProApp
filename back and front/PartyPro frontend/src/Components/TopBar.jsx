// TopBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/poppins'; // Importing Poppins font
import logo from '../assets/images/logo.png'

const TopBar = () => {
  return (
    <div className="bg-black text-white py-4 px-8 flex justify-between items-center absolute top-0 left-0 w-full  z-10 font-poppins">
      <div className="flex items-center">
      <Link to="/HomePage"> {/* Link to the HomePage */}
        <img src={logo} alt="Logo" className="w-30 h-8 mr-2 rounded-lg cursor-pointer" /> {/* Adjust width and height as needed */}
      </Link>
    </div>
      <div className="flex items-center">
        <Link to="/" className="mx-4">
          HOME
        </Link>
        <Link to="/about" className="mx-4">
          ABOUT
        </Link>
        <Link to="/ContactUsPage" className="mx-4">
          CONTACT
        </Link>
        <Link to="/login" className="mx-4">
          LOGIN
        </Link>
        <Link to="/signup" className="mx-4">
          SIGNUP
        </Link>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default TopBar;
