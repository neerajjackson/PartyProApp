import React, { useState, useEffect } from 'react';
import TopBar from '../Components/TopBar';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import '@fontsource/poppins'; // Importing Poppins font
import logo from '../assets/images/logo.png'
// import { Link } from 'react-router-dom';
const HomePage = () => {
    const visible = true; 
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
        <Link to="/customize" className="mx-4">
          <button className='bg-white text-black rounded-lg'>Customize now</button>
        </Link>
        <Link to="/customize" className="mx-4">
          <button className='bg-white text-black rounded-lg'>Log out</button>
        </Link>
        {/* Add more links as needed */}
      </div>
    </div>
            <div className="relative">
        {/* Black shade with opacity */}
        <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-black opacity-40"></div>
        {/* Text heading and paragraph */}
        <div className="absolute top-0 text-left ml-0 text-white p-8 font-poppins">
          <h1 className="text-4xl font-bold mb-4">
          Welcome to The Eventify Experience: Discover the Magic of Locally Hosted Celebrations!!
          </h1>
          <p className="text-base leading-relaxed max-w-xl">
          Embark on a Journey Through a Wonderland of Vibrant Events, Mouthwatering Cuisine, and Handcrafted Delights. Join us in Celebrating Local Talent and Community Spirit
          </p>
        </div>
        {/* Rounded image covering the full width */}
        <img
          src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1711374603/saree-ceremony-1_pgc0tg.jpg"
          alt="Hero Image"
          className="w-full h-80 mt-20 object-cover rounded-lg"
        />
      </div>

      {/* Six text elements in individual black rounded boxes */}
      <div className="flex justify-center mt-8">
        <div className="bg-black rounded-full px-4 py-2 mx-2">
          <span className="text-white">BIRTHDAYS</span>
        </div>
        <div className="bg-black rounded-full px-4 py-2 mx-2">
          <span className="text-white">ALUMINI MEETS</span>
        </div>
        <div className="bg-black rounded-full px-4 py-2 mx-2">
          <span className="text-white">SURPRICE PARTY</span>
        </div>
        <div className="bg-black rounded-full px-4 py-2 mx-2">
          <span className="text-white">BABY SHOWER</span>
        </div>
        <div className="bg-black rounded-full px-4 py-2 mx-2">
          <span className="text-white">WEDDING AND ENGAGEMENT</span>
        </div>
        <div className="bg-black rounded-full px-4 py-2 mx-2">
          <span className="text-white">PUBERTY FUNCTION</span>
        </div>
      </div>



      {/* Events Near You section */}
      <div className="text-black text-left ml-0 mt-20 p-1 font-poppins">
        <h2 className="text-3xl font-bold mb-4">Events Near You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Event 1 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713505315/bangle-ceramony_on907s.webp" alt="Event" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">WEDDING PLANNER </h3>
            <div className="flex items-center mb-2">
              <FaCalendarAlt className="mr-2" />
              <p>Saturday and Sunday</p>
            </div>
            <div className="flex items-center mb-2">
              <FaClock className="mr-2" />
              <p>10:00 AM - 12:00 PM</p>
            </div>
            <p><strong>Budget:</strong> $120000</p>
            <p className='mt-2'><strong>Description:</strong>Accomadation for the 4-5 peoples and food will be provided for 3 days</p>
            <div className="flex justify-">
        <a href='Eventshowcase' className="bg-black hover:bg-black-100 text-white font-bold py-2 px-4 rounded mt-4">Book Now</a>
      </div>
          </div>
          {/* Event 2 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1711374273/love-heart-hands-together-wedding-outfit-couple-bride-3840x2160-388_ghj8sq.jpg" alt="Event" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Baby Shower</h3>
            <div className="flex items-center mb-2">
              <FaCalendarAlt className="mr-2" />
              <p>2024</p>
            </div>
            <div className="flex items-center mb-2">
              <FaClock className="mr-2" />
              <p>11:00 AM - 3:00 PM</p>
            </div>
            <p><strong>Budget:</strong> $40000</p>
            <p className='mt-2'><strong>Description:</strong> Special party for the newcomer with speacial cuisines and accoadation.
            </p>
            <div className="flex justify-">
            <a href='Eventshowcase1' className="bg-black hover:bg-black-100 text-white font-bold py-2 px-4 rounded mt-4">Book Now</a>
      </div>
          </div>
          {/* Event 3 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://img.freepik.com/premium-photo/environment-celebrating-world-tourism-day_931878-276745.jpg?w=1060" alt="Event" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Live Music for the surprise</h3>
            <div className="flex items-center mb-2">
              <FaCalendarAlt className="mr-2" />
              <p>july-sep 2024</p>
            </div>
            <div className="flex items-center mb-2">
              <FaClock className="mr-2" />
              <p>5:00 PM - 7:00 PM</p>
            </div>
            <p><strong>Budget:</strong> $20000</p>
            <p className='mt-2'><strong>Description:</strong> Surprise your loved one with pleasant music party and speacial food
          </p>
          <div className="flex justify-">
          <a href='Eventshowcase2' className="bg-black hover:bg-black-100 text-white font-bold py-2 px-4 rounded mt-4">Book Now</a>
      </div>
          </div>
          {/* Event 4 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713505323/categories_1_bt96zr.webp" alt="Event" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">BIRTHDAY CELEBRATION</h3>
            <div className="flex items-center mb-2">
              <FaCalendarAlt className="mr-2" />
              <p>May-April 2024</p>
            </div>
            <div className="flex items-center mb-2">
              <FaClock className="mr-2" />
              <p>12:00 PM - 4:00 PM</p>
            </div>
            <p><strong>Budget:</strong>$350000</p>
            <p className='mt-2'><strong>Description:</strong> food-upto 100 people and Accomadation for 100 people.</p>
            <div className="flex justify-">
            <a href='Eventshowcase3' className="bg-black hover:bg-black-100 text-white font-bold py-2 px-4 rounded mt-4">Book Now</a>
      </div>
          </div>
          {/* Event 5 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://img.freepik.com/free-photo/people-celebrating-ramadan-together_23-2151404387.jpg?t=st=1713069153~exp=1713072753~hmac=7490c584aee1c47b0c480cecde446553d2552093f683145575f0b5b947f94acb&w=996" alt="Event" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Puberty Function</h3>
            <div className="flex items-center mb-2">
              <FaCalendarAlt className="mr-2" />
              <p>Jan-Dec 2024</p>
            </div>
            <div className="flex items-center mb-2">
              <FaClock className="mr-2" />
              <p>6:30 PM - 8:30 PM</p>
            </div>
            <p><strong>Budget:</strong> $10000</p>
            <p className='mt-2'><strong>Description:</strong> food for 20 people and Accomadation for 20 people 
           </p>
           <div className="flex justify-">
           <a href='Eventshowcase4' className="bg-black hover:bg-black-100 text-white font-bold py-2 px-4 rounded mt-4">Book Now</a>
      </div>
          </div>
          {/* Event 6 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://img.freepik.com/free-photo/medium-shot-old-woman-celebrating-tamil-new-year_23-2151210704.jpg?t=st=1713069216~exp=1713072816~hmac=aa6c659bf0e0b1ba5da8cf051dd8b6bf6b7dd6a863754dc84f070c11ca4a0f66&w=1060" alt="Event" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">House Warming</h3>
            <div className="flex items-center mb-2">
              <FaCalendarAlt className="mr-2" />
              <p>Nov-Dec 2024</p>
            </div>
            <div className="flex items-center mb-2">
              <FaClock className="mr-2" />
              <p>9:00 AM - 5:00 PM</p>
            </div>
            <p><strong>Budget:</strong>$32538</p>
            <p className='mt-2'><strong>Description:</strong> Morning and Afternoon food for max-100 people
           </p>
           <div className="flex justify-">
           <a href='Eventshowcase5' className="bg-black hover:bg-black-100 text-white font-bold py-2 px-4 rounded mt-4">Book Now</a>
      </div>
          </div>
        </div>
      </div>
      <div className="text-black text-left ml-0 mt-20 p-1 font-poppins relative">

      

{/* New Section: Showcase */}
<section className="container mx-auto mt-16 px-4 "> {/* Add relative positioning */}
    <h2 className="text-3xl font-bold mb-8">CUSTOMIZE YOUR EVENTS</h2>
    {/* Remove the absolute overlay div */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Square Card 1 */}
        <div className="bg-black rounded-lg shadow-md p-6 text-white shadow-2xl shadow-blue-500/60">
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-white-900 text-transparent bg-clip-text">Lets PARTY!!!!</h3>
            <p className="text-gray-300">Discover a wide selection of locally-grown fruits and vegetables at [Farmers Market Name]. From vibrant heirloom tomatoes bursting with flavor to crisp, leafy greens picked just this morning, our market offers an abundance of farm-fresh goodness for you to enjoy.</p>
            <h3 className="text-xl font-semibold mb-2 mt-10">Visit Us Today</h3>
            <p className="text-gray-300">Plan your visit to Farmery and experience the joy of shopping for fresh produce in a vibrant and community-driven atmosphere. </p>
            {/* Gradient Button */}
            <button className="hover:bg-black-100 text-transparent bg-gradient-to-r from-blue-500 to-pink-500 font-bold py-2 px-4 rounded mt-4">
    <Link to="/ShoppingPage" className="text-white">Shop Now</Link>
</button>


        </div>
        {/* Square Card 2 and 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Square Card 2 */}
            <div className="bg-black rounded-lg shadow-md p-6 shadow-2xl shadow-blue-500/70 text-white">
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-yellow-900 text-transparent bg-clip-text">Food and Cuisines</h3>
                <p className="text-gray-300">Indulge in delicious pastries, bread, and cakes, baked fresh daily.</p>
            </div>
            <br></br>
            {/* Square Card 3 */}
            <div className="bg-black rounded-lg shadow-md p-6 shadow-2xl shadow-blue-500/70 text-white">
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-pink-900 text-transparent bg-clip-text">Hotels and Accomadation</h3>
                <p className="text-gray-300">Explore unique handmade crafts, artworks, and gifts.</p>
            </div>
            <div className="bg-black rounded-lg shadow-md p-6 shadow-2xl shadow-blue-500/70 text-white">
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">Invitations</h3>
                <p className="text-gray-300">Get ready to tap your feet and groove to the rhythm of live music!</p>
            </div>
        </div>
    </div>
</section>



<hr className="border-gray-300 mt-20 ml-0 border-solid border-t-2" /> {/* Line with increased thickness */}
{/* Calendar Section */}
<div className="text-black text-left ml-0  mt-1 p-10 font-poppins relative">
    {/* Gradient overlay */}
    <div className="absolute inset-0 opacity-50 rounded-lg"></div>
    <h2 className="text-3xl font-bold mb-4 relative z-10" style={{ paddingTop: "60px" }}>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Upcoming Events</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="bg-white rounded-lg shadow-md p-4 ">
            <div className="flex justify-center items-center mb-4">
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-green-400 text-white mr-4">Sun</div>
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-orange-400 text-white mr-4">Mon</div>
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-orange-400 text-white mr-4">Tue</div>
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-orange-400 text-white mr-4">Wed</div>
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-orange-400 text-white mr-4">Thu</div>
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-orange-400 text-white mr-4">Fri</div>
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-green-400 text-white">Sat</div>
            </div>
            {/* Example Calendar Dates */}
            <div className="grid grid-cols-7 gap-1">
                {[...Array(31).keys()].map((day) => (
                    <div key={day} className={`w-10 h-10 flex justify-center items-center rounded-full text-gray-700 ${day + 1 === 11  || day + 1 === 31 ? 'bg-yellow-400' : 'bg-gray-200'}`}>{day + 1}</div>
                ))}
            </div>
        </div>
    
{/* Reminder Card Container */}
<div className="bg-white rounded-lg shadow-md p-4">
    <h3 className="text-xl font-semibold mb-2">Reminders</h3>
    {/* Reminder Cards */}
    <div className="grid grid-cols-1 gap-4">
        {/* Reminder 1 */}
        <div className="bg-black rounded-lg shadow-md p-4 text-white flex justify-between items-center">
            <div>
                <h3 className="text-lg font-semibold mb-1">Market Showcase</h3>
                <p className="text-gray-300">10:00 AM</p>
            </div>
            <div className="flex space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
        {/* Reminder 2 */}
        <div className="bg-black rounded-lg shadow-md p-4 text-white flex justify-between items-center">
            <div>
                <h3 className="text-lg font-semibold mb-1">Live Music at the Market</h3>
                <p className="text-gray-300">2:30 PM</p>
            </div>
            <div className="flex space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
        {/* Reminder 3 */}
        <div className="bg-black rounded-lg shadow-md p-4 text-white flex justify-between items-center">
            <div>
                <h3 className="text-lg font-semibold mb-1">Holiday Market Extravaganza</h3>
                <p className="text-gray-300">5:00 PM</p>
            </div>
            <div className="flex space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
    </div>
</div>



    </div>
</div>




  {/* Gradient overlay */}
<div className="relative inset-0   rounded-lg"></div>
<h2 className="text-3xl font-bold mb-4 relative z-10" style={{ paddingTop: "60px" }}>
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Join Meetup</span>
</h2>
{/* Rest of your code */}

                <p className="text-base leading-relaxed max-w-xl mb-4">
                    People use Meetup to meet new people, learn new things, find support, get out of their comfort zones, and pursue their passions, together. Membership is free.
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Join Now
            </button>
            </div>

       {/* Popular cities on Meetup section */}
<div className="relative text-black text-center mt-10 p-1 font-poppins" style={{ height: "400px" }}>
    {/* Background image */}
    <div className="absolute inset-0 z-0 bg-cover bg-center rounded-lg" 
    style={{ backgroundImage: "url('https://img.freepik.com/free-vector/hand-drawn-lima-skyline-illustration_23-2150006330.jpg?t=st=1713071995~exp=1713075595~hmac=f3c31006f2b655b5f452514fe0d7d3f0db088f6141536e9ed87f115ca39ef5a1&w=1380" }}></div>
    {/* Content */}
    <div className="relative z-10" style={{ marginTop: "100px" }}>
        <h2 className="text-3xl font-bold mb-4">Popular Cities on Meetup</h2>
        <div className="flex flex-wrap justify-center items-center">
            <div className="bg-gray-100 rounded-lg p-4 m-4">
                <span className="text-lg font-semibold">Mumbai</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 m-4">
                <span className="text-lg font-semibold">Delhi</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 m-4">
                <span className="text-lg font-semibold">Bangalore</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 m-4">
                <span className="text-lg font-semibold">Chennai</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 m-4">
                <span className="text-lg font-semibold">Kolkata</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 m-4">
                <span className="text-lg font-semibold">Hyderabad</span>
            </div>
            {/* Add more cities as needed */}
        </div>
        {/* View more cities button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">View More Cities</button>
    </div>
</div>



{/* How Meetup works section */}
<div className="text-black text-left ml-0 mt-20 p-1 font-poppins relative">
    {/* Gradient overlay */}
    <div className="absolute inset-0  opacity-50 rounded-lg "></div>
    <h2 className="text-3xl font-bold mb-4 relative z-10">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">How Meetup Works</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Discover events and groups */}
        <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-2">Discover events and groups</h3>
            <p>See who's hosting local events for all the things you love.</p>
            <button className="bg-black hover:bg-black-100 text-white font-bold py-2 px-4 rounded mt-4">Search Events</button>
        </div>
        {/* Start a group to host events */}
        <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-2">Start a group to host events</h3>
            <p>Create your own Meetup group, and draw from a community of millions.</p>
            <button className="bg-black hover:bg-black-100 text-white font-bold py-2 px-4 rounded mt-4">Start a Group</button>
        </div>
    </div>
</div>
 
 {/* F{/* Friendships are made on Meetup section */}
<div className="text-black text-left ml-0 mt-20 p-1 font-poppins">
    <h2 className="text-3xl font-bold mb-4">Friendships are made on Meetup</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://img.freepik.com/free-photo/realistic-scene-from-neighborhood-yard-sale-miscellaneous-items_23-2151238341.jpg?t=st=1713071260~exp=1713074860~hmac=dd7f80506e6e890ddcc6306578a5f29f26d09eee1fa7166f45bf0d8f5fbcc244&w=996" alt="Image" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">I Used Meetup to Make Friends at Brunch</h3>
            <p>New Jersey-based writer and college student Brianna Stryker wanted to meet friends in her hometown.</p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://img.freepik.com/free-photo/group-colombian-male-friends-spending-time-together-having-fun_23-2151356424.jpg?t=st=1713071296~exp=1713074896~hmac=b293e5f308ac8ec4c7e85f26ffcd4d817d80f4337e8dcbd0b09e9ad883c3c09a&w=996" alt="Image" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">How to Turn Casual Connections into Close Friendships</h3>
            <p>It’s proven that close friendships are harder to make as an adult. But don’t sweat it: here’s what you can do to simplify the process.</p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://img.freepik.com/free-photo/view-diverse-adolescents-practicing-health-wellness-activities-themselves-their-community_23-2151416245.jpg?t=st=1713071327~exp=1713074927~hmac=0997e8573c99599a1fa0c5e569ea946e0a8ab16c577c7249e76747cedd3e039a&w=1060" alt="Image" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Do You Have the “Right” Number of Friends?</h3>
            <p>Studies from around the world have tried to help people answer this question. Learn about the three tiers of friendship and how to fulfill them.</p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
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

export default HomePage;