import React, { useState, useEffect } from 'react';
import TopBar from '../Components/TopBar';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import '@fontsource/poppins'; // Importing Poppins font
import logo from '../assets/images/logo.png'

const CustomizePage = () => {
  return (
    
      <div>
            {/* TopBar with conditional visibility */}
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
          About
        </Link>
        <Link to="/ContactUsPage" className="mx-4">
          Contact
        </Link>
        {/* <Link to="/login" className="mx-4">
          Login
        </Link> */}
        <Link to="/" className="mx-4">
          <button className='bg-white text-black rounded-lg'>log out</button>
        </Link>
        {/* Add more links as needed */}
      </div>
    </div>
      {/* First Section */}
      <div className="relative rounded-lg overflow-hidden mt-20" style={{ height: '300px' }}>
        <div className="absolute inset-0 w-full h-full object-cover">
          <img
            src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713585939/events-2609526_1280_ehvgsw.jpg" // Replace 'your-image-url.jpg' with the URL or path of your image
            alt="Cover"
            className="w-full h-full object-cover"
          />
          {/* Text in top right corner */}
          <div className="absolute top-0 right-0 p-4 text-black font-poppins text-lg">
         CUSTOMIZE YOUR EVENT
          </div>
        </div>
      </div>

      {/* How Meetup works section */}
      <div className="text-black text-left ml-0 mt-20 p-1 font-poppins relative">
        {/* Gradient overlay */}
        <div className="absolute inset-0 opacity-50 rounded-lg "></div>
        <h2 className="text-3xl font-bold mb-4 relative z-20">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Customize your events</span>
        </h2>
      </div>

     {/* Second Section */}
<div className="flex mt-0 ">
  {/* Image on the left */}
  <div className="w-1/3 pr-2 relative group">
    
    {/* Image */}
    <img
      src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713537530/pexels-pixabay-53464_elxq3a.jpg" // Replace 'your-left-image-url.jpg' with the URL or path of your image
      alt="Left Image"
      className="w-full h-auto rounded-lg object-cover transition-opacity duration-300 group-hover:opacity-50"
    />
    {/* Text */}
    <div className="absolute top-0 left-0 p-4 text-white font-poppins text-lg">
      Hotels and Restaurants
    </div>
    {/* Explore button */}
    <button className="absolute bottom-10 left-4 bg-black text-white px-4 py-2 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      Explore
    </button>
  </div>
  {/* Images on the right */}
  <div className="w-2/3 flex flex-col">
    <div className="mb-2 relative group" style={{ height: '240px' }}>
      {/* Image */}
      <img
        src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713537428/pexels-rdne-6646364_vraxpj.jpg" // Replace 'your-right-image-url.jpg' with the URL or path of your image
        alt="Right Image 1"
        className="w-full h-full rounded-lg mb-2 object-cover transition-opacity duration-300 group-hover:opacity-50"
      />
      {/* Text */}
      <div className="absolute top-0 left-0 p-4 text-white font-poppins text-lg">
       Food and cuisines
      </div>
      {/* Explore button */}
      <button className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Explore
      </button>
    </div>
    <div style={{ height: '210px' }} className="relative group">
      {/* Image */}
      <img
        src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713537343/pexels-paggiarofrancesco-2111015_wumhsp.jpg" // Replace 'your-right-image-url.jpg' with the URL or path of your image
        alt="Right Image 2"
        className="w-full h-full rounded-lg object-cover transition-opacity duration-300 group-hover:opacity-50"
      />
      {/* Text */}
      <div className="absolute top-0 left-0 p-4 text-white font-poppins text-lg">
       Dj and Music
      </div>
      {/* Explore button */}
      <button className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Explore
      </button>
    </div>
  </div>
</div>


      {/* Product Listing Section */}
      <div className="mt-20">
        {/* Fresh Produce */}
        <div className="mb-16">
        <div className="text-black text-left ml-0 mt-20 p-1 font-poppins relative">
        {/* Gradient overlay */}
        <div className="absolute inset-0 opacity-50 rounded-lg "></div>
        <h2 className="text-3xl font-bold mb-4 relative z-20">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Foods</span>
        </h2>
      </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
            {/* Product 1 */}
            <div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713536221/2148821514_haxrpy.jpg" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Biriyani</div>
  <div className="text-gray-500 mb-2">$37 per Head</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">Add</button>
</div>

<div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713535532/14835391_5526361_zbnrre.jpg" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Ice Cream</div>
  <div className="text-gray-500 mb-2">$34 per Head</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">Add</button>
</div>
<div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713536037/32001_1_jmq8sm.jpg" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Veg Curries</div>
  <div className="text-gray-500 mb-2">$10 per Head</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">Add</button>
</div><div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713536120/2148723469_nmzxq1.jpg" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Veg meals </div>
  <div className="text-gray-500 mb-2">$12 per Head</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">Add</button>
</div>
           
            {/* Repeat the structure for the remaining products */}
          </div>
        </div>
        
      </div>
      <div className="mt-20">
        {/* Fresh Produce */}
        <div className="mb-16">
        <div className="text-black text-left ml-0 mt-20 p-1 font-poppins relative">
        {/* Gradient overlay */}
        <div className="absolute inset-0 opacity-50 rounded-lg "></div>
        <h2 className="text-3xl font-bold mb-4 relative z-20">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">HOTELS</span>
        </h2>
      </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
            {/* Product 1 */}
            <div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713536395/10728_az7jdp.jpg" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Location: BANGLORE</div>
  <div className="text-gray-500 mb-2">BUDGET:$23 per day</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">add</button>
</div>

<div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713536392/3192_ikmiiu.jpg" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Location: COIMBATORE</div>
  <div className="text-gray-500 mb-2">BUDGET:$12 per day</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">add</button>
</div>
<div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713536395/10728_az7jdp.jpg" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Location: HYBERABAD</div>
  <div className="text-gray-500 mb-2">BUDGET:$1500 per day</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">add</button>
</div><div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713536398/150766_hoxh87.jpg" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Location: MUMBAI</div>
  <div className="text-gray-500 mb-2">BUDGET:$20 per day</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">add</button>
</div>
           
            {/* Repeat the structure for the remaining products */}
          </div>
        </div>
        
      </div>
      <div className="mt-20">
        {/* Fresh Produce */}
        <div className="mb-16">
        <div className="text-black text-left ml-0 mt-20 p-1 font-poppins relative">
        {/* Gradient overlay */}
        <div className="absolute inset-0 opacity-50 rounded-lg "></div>
        <h2 className="text-3xl font-bold mb-4 relative z-20">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Invitations </span>
        </h2>
      </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
            {/* Product 1 */}
            <div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713536700/invi4_fykpzi.jpg" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Antiques</div>
  <div className="text-gray-500 mb-2">$10</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">add</button>
</div>

<div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713536698/invi3_hiosgn.jpg" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Bamboo freed</div>
  <div className="text-gray-500 mb-2">$20 per card</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">add</button>
</div>
<div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713536697/invi1_kipwjn.jpg" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Tablewite surzz</div>
  <div className="text-gray-500 mb-2">$50 per card</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">add</button>
</div><div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713536698/invi2_s0hxnp.jpg" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Greevy flit</div>
  <div className="text-gray-500 mb-2">$30 per card</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">add</button>
</div>
           
            {/* Repeat the structure for the remaining products */}
          </div>
        </div>

        

        
<hr className="border-gray-300 my-10 border-solid border-t-2" /> {/* Line with increased thickness */}
        
<div className="mt-20 text-center">
  {/* Heading */}
  <h2 className="text-3xl font-bold mb-4 font-poppins">Pre Book Your Events from the Office</h2>
  
  {/* Paragraph */}
  <p className="text-lg text-gray-600 mb-6">
    
  </p>

  {/* Buttons */}
  <div className="flex justify-center">
      <Link to="/ContactUsPage">
        <button className="bg-green-500 text-white px-6 py-3 rounded-md mr-4">Contact Us</button>
      </Link>
      <Link to="/VendorsShowcasePage">
        <button className="bg-black text-white px-6 py-3 rounded-md">Mail Us</button>
      </Link>
    </div>
</div>
{/* Image Section */}
<div className="bg-black rounded-lg mt-10 shadow-[5px_5px_0px_0px_rgba(109,40,217)] py-12">
  <div className="w-full max-w-screen-lg mx-auto px-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
    {/* Image 1 */}
    <div className="rounded-lg overflow-hidden">
      <img src="https://images.pexels.com/photos/8987743/pexels-photo-8987743.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" className="w-full h-auto" />
    </div>
    {/* Image 2 */}
    <div className="rounded-lg overflow-hidden">
      <img src="https://images.pexels.com/photos/8608389/pexels-photo-8608389.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" className="w-full h-auto" />
    </div>
    {/* Image 3 */}
    <div className="rounded-lg overflow-hidden">
      <img src="https://images.pexels.com/photos/6337264/pexels-photo-6337264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 3" className="w-full h-auto" />
    </div>
  </div>
  {/* Text in the center */}
  <div className="text-center mt-6 font-poppins">
  <p className="text-2xl font-bold">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">Get directly from the farm</span>
  </p>
  <p className="text-2xl font-bold">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">Fresh and Hygienic</span>
  </p>
</div>

</div>



<div className="mt-20 flex justify-center" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/continuous-line-heart-shape-border-with-realistic-paper-heart_333792-28.jpg?t=st=1713103588~exp=1713107188~hmac=ba3d340d19cf4711b334fd6ce4fc7017f5a0f28ef3cd6e3366dbf9556f95ac94&w=1380')", backgroundSize: 'contain', backgroundPosition: 'center' }}>
  {/* Left Section: Why Choose Us */}
  <div className="w-full max-w-screen-lg px-8">
    <h2 className="text-3xl font-bold mb-10 mt-10 font-poppins" style={{ background: '-webkit-linear-gradient(left, #00c6ff, #0072ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Visit Us Today</h2>
    <p className="text-lg text-gray-600 mb-6">
      Ready to experience the magic of celebration? Plan your visit today and immerse yourself 
      in the sights, sounds, and flavors of our bustling marketplace. Whether you're a seasoned market-goer 
      or a first-time visitor, you're sure to find something delightful around every corner.
    </p>
    <br></br>
    <br></br>
    <br></br>
  </div>
</div>


      </div>
      <br></br>
<br></br>
<hr className="border-gray-300 my-10 border-solid border-t-2" /> {/* Line with increased thickness */}
      <Footer/>
    </div>
  );
};

export default CustomizePage;