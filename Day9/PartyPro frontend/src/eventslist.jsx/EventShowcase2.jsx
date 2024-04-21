import React, { useState } from 'react';
import TopBar from '../Components/TopBar';
import Footer from '../Components/Footer';

import BookingConfirmationPopup from '../Components/BookingConfirmationPopup';

const EventShowcase2 = () => {
    const [showPopup, setShowPopup] = useState(false);
  
    const handleBookNowClick = () => {
      setShowPopup(true);
    };
  
    const handleClosePopup = () => {
      setShowPopup(false);
    };
  
    return (
      <div className="container mx-auto p-4 mt-20">
        <TopBar />
        <div className="text-left">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 font-poppins">Live Music for the surprise</h1>
          <p className="text-lg text-gray-600 mb-4 font-poppins">Date: Saturday, May 15th, 2024</p>
          <p className="text-lg text-gray-600 mb-4 font-poppins">Time: 10:00 AM - 12:00 PM</p>
          <p className="text-lg text-gray-600 mb-8 font-poppins">Location: Farmer's Kitchen Culinary Studio</p>
        </div>
        <div className="flex mb-8">
          <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1711373970/about-background-image_xfezzg.png" alt="Cooking Workshop" className="h-80 object-contain rounded-lg" />
        </div>
        <div className="text-left mb-8">
          <p className="text-lg text-gray-800 font-poppins">
            <strong>Description:</strong><br />
            <b>Transportation and Accommodation:</b> Provide information and assistance with transportation options for guests, as well as recommendations for nearby accommodations.<br /><br />
  
            <b> Photography and Videography:</b> Provide options for hiring photographers and videographers, with galleries of past work and packages available.<br /><br />
  
            <b>Seating Arrangement:</b> Offer tools for creating and managing seating arrangements for the reception, including drag-and-drop functionality and printable seating charts..<br /><br />
  
            <b>Venue Details:</b> Include the name, address, and contact information of the wedding venue(s), such as ceremony location, reception hall, and any additional spaces for pre- or post-event activities.<br /><br />
          </p>
        </div>
        <div className="flex justify-center">
          <button onClick={handleBookNowClick} className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Book Now</button>
        </div>
        {showPopup && <BookingConfirmationPopup onClose={handleClosePopup} />} {/* Render the popup if showPopup is true */}
        <br />
        <br />
        <hr className="border-gray-300 my-10 border-solid border-t-2" /> {/* Line with increased thickness */}
        <Footer />
      </div>
    );
  }
  
  export default EventShowcase2;
