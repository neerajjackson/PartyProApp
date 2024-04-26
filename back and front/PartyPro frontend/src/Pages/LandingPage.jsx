import React from 'react';
import TopBar from '../Components/TopBar';
import '@fontsource/poppins'; // Importing Poppins font
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <TopBar />
      <div className="flex justify-between items-start p-0 ml-0 font-poppins"> {/* Applying font-poppins class to the main container */}
        <div className="text-left ml-0 mt-40">
          <h2 className="text-3xl font-bold">Welcome to The Eventify Experience: Discover the Magic of Locally Hosted Celebrations!!</h2>
          <br />
          <p className="text-lg text-gray-700">Embark on a Journey Through a Wonderland of Vibrant Events, Mouthwatering Cuisine, and Handcrafted Delights. Join us in Celebrating Local Talent and Community Spirit</p>
          <button className="bg-black hover:bg-black-100 text-white font-bold py-2 px-4 rounded mt-4">
        <Link to="Homepage">Get Started</Link> {/* Link to the home page */}
      </button>
          <div style={{ height: '60px' }}></div> {/* Adding space after the button */}
          <div className="text-lg text-gray-700">
            <p><strong>
Explore a Haven of Unforgettable Moments:</strong></p>
            <ul className="list-disc pl-5 mt-4">
              <li>
Dynamic Entertainment: Where every moment is a showstopper.</li>
              <li>Exquisite Cuisine: A feast for your senses, prepared with passion.</li>
              <li>Unique Experiences: Each event, a journey waiting to be explored.</li>
            </ul>
          </div>
        </div> 
        
        <img 
          src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713505315/bangle-ceramony_on907s.webp" 
          alt="Eye-catching Image" 
          style={{ marginTop: '60px', borderRadius: '8px', maxHeight: '600px', maxWidth: '50%' }} 
        />
      </div>

      {/* Our Achievements Section */}
      <div className="bg-black rounded-lg p-8 mb-20 mt-20 font-poppins text-white">
        <h2 className="text-2xl font-bold mb-10 mt-5">Our Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-base">
              <span className="text-4xl font-thin">70%</span>
              <br></br>
              Customer Satisfaction
            </p>
          </div>
          <div className="md:border-l border-gray-600">
            <p className="text-base">
              <span className="text-4xl font-thin">50%</span>
              <br></br>
              Best organiser Award
            </p>
          </div>
          <div className="md:border-l border-gray-600">
            <p className="text-base">
              <span className="text-4xl font-thin">40%</span>
              <br></br>
              Reduced Carbon Footprint
            </p>
          </div>
        </div>
      </div>
      {/* New Section */}
<div className="flex justify-between items-start p-0 ml-0 mt-20 font-poppins">
  <div className="rounded-bg ml-4">
    <img 
      src="https://cdn.dribbble.com/userupload/14073266/file/original-2c0dc3e7978890f7baaf381c6928cd23.png?resize=600x507" 
      alt="Rounded Image" 
      style={{ borderRadius: '8px', maxHeight: '1900px', maxWidth: '130%' }} 
    />
  </div>

  <div className="text-left ml-20">
    <h2 className="text-3xl font-bold mb-10">Connect us with our Application</h2>
    <p className="text-lg text-gray-700">Discover The Eventify Experience: Immerse yourself in the heartbeat of local festivities, with a kaleidoscope of events, culinary delights, and handcrafted wonders, all curated from our dynamic community of hosts and creators.</p>
    <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4">Learn More</button>
    <div className="mt-0 flex justify-between ml-0">
  <img 
    src="https://cdn.dribbble.com/userupload/14073661/file/original-38acf57905e09f0923e9134337325264.png?resize=1024x319&vertical=center" 
    alt="Combined Image" 
    className="w-60"
    style={{ width: '360px', height: '120px', marginLeft: '0' }} 
  />
</div>


  </div>
</div>

<hr className="border-gray-300 my-10 border-solid border-t-2" /> {/* Line with increased thickness */}



{/* New Section */}
<div className="bg-white mt-20 rounded-lg p-8 font-poppins text-black">
  <h2 className="text-4xl font-bold mb-10">
Step into the heart of Celebration Central.</h2>
  <p className="text-lg mb-10">Step into the vibrant world of event management with our party management app. Immerse yourself in the dynamic tapestry of celebrations crafted over time. Delve into past party events through captivating visuals, narrating tales of meticulous planning and joyful gatherings..</p>
  
  <div className="grid grid-cols-3 gap-4">
    {/* You can replace the image URLs with your own */}
    <div className="relative">
      <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1711373970/about-background-image_xfezzg.png" alt="Image" className="rounded-lg w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
        <a href="/HomePage" className="text-white text-lg">View More</a>
      </div>
    </div>
    <div className="relative">
      <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713500853/puberty-functions_l72d4x.webp" alt="Image" className="rounded-lg w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
      <a href="/HomePage" className="text-white text-lg">View More</a>
      </div>
    </div>
    <div className="relative">
      <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1711373969/home-banner-image_djznam.webp" alt="Image" className="rounded-lg w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
      <a href="/HomePage" className="text-white text-lg">View More</a>
      </div>
    </div>
    <div className="relative">
      <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713500803/house-warming_jpuinw.webp" alt="Image" className="rounded-lg w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
      <a href="/HomePage" className="text-white text-lg">View More</a>
      </div>
    </div>
    <div className="relative">
      <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713806221/cake-1835443_1280_uwhyvq.jpg" alt="Image" className="rounded-lg w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
      <a href="/HomePage" className="text-white text-lg">View More</a>
      </div>
    </div>
    <div className="relative">
      <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713767650/sylvester-6897648_1280_kwiqif.jpg" alt="Image" className="rounded-lg w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
      <a href="/HomePage" className="text-white text-lg">View More</a>
      </div>
    </div>
  </div>
</div>
 {/* New Section */}
<div 
  className="bg-white mt-20 rounded-lg p-8 font-poppins text-black" 
  style={{ 
    backgroundImage: "url('https://img.freepik.com/premium-vector/red-heart-shape-with-line-white-background-with-copy-space_120819-536.jpg?w=1060')",
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '80px', // Adjust padding as needed
    textAlign: 'center', // Center align text
    color: '#000', // Text color
    fontSize: '1.25rem' // Font size of text
  }}
>
  <h2 className="text-4xl font-bold mb-10">Celebrate the richness of local flavors and embrace the essence of your community</h2>
  <p className="text-lg mb-10">Immerse yourself in a culinary journey like no other as we celebrate the vibrant flavors of our local community. From farm-fresh produce to handcrafted delicacies, each offering tells a story of passion, quality, and tradition. Join us in honoring the rich tapestry of our region's bounty, where every bite is a testament to the dedication of our local growers and artisans.</p>
</div>

<hr className="border-gray-300 my-10 border-solid border-t-2" /> {/* Line with increased thickness */}

<Footer />
    </div>
  );
};

export default LandingPage;
