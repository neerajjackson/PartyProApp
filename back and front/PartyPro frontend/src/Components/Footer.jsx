import React from 'react';
import logo from '../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className="bg-white text-black py-4 px-8 flex justify-between items-center bottom-0 left-0 w-full z-10 font-poppins">
          <div className="container mt-10 ml-0 flex flex-wrap justify-center items-center">

            <div className="w-full lg:w-1/5 mb-4 lg:mb-0 ">
              <ul className="flex flex-col justify-start lg:justify-start">
                <li className="mb-4 text-left"><a href="about" className="text-gray-900 hover:text-black">About Us</a></li>
                <li className="mb-4 text-left"><a href="#" className="text-gray-900 hover:text-black">Careers</a></li>
                <li className="mb-4 text-left"><a href="#" className="text-gray-900 hover:text-black">Employer Home</a></li>
                <li className="mb-4 text-left"><a href="#" className="text-gray-900 hover:text-black">Sitemap</a></li>
              </ul>
            </div>
           
            <div className="w-full lg:w-1/5 mb-4 lg:mb-0">
              <ul className="flex flex-col justify-start lg:justify-start">
                <li className="mb-4 text-left"><a href="#" className="text-gray-900 hover:text-black">Help Center</a></li>
                <li className="mb-4 text-left"><a href="#" className="text-gray-900 hover:text-black">Summons/Notices</a></li>
                <li className="mb-4 text-left"><a href="#" className="text-gray-900 hover:text-black">Grievances</a></li>
                <li className="mb-4 text-left"><a href="#" className="text-gray-900 hover:text-black">Report Issue</a></li>
              </ul>
            </div>
           
            <div className="w-full lg:w-1/5 mb-4 lg:mb-0">
              <ul className="flex flex-col justify-start lg:justify-start">
                <li className="mb-4 text-left"><a href="#" className="text-gray-900 hover:text-black">Privacy Policy</a></li>
                <li className="mb-4 text-left"><a href="terms" className="text-gray-900 hover:text-black">Terms & Conditions</a></li>
                <li className="mb-4 text-left"><a href="#" className="text-gray-900 hover:text-black">Fraud Alert</a></li>
                <li className="mb-4 text-left"><a href="#" className="text-gray-900 hover:text-black">Trust & Safety</a></li>
              </ul>
            </div>

            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <ul className="flex">

                <li className="mr-4 ml-10">
                  <a href="#" className="text-gray-900 hover:text-black">
                    <img src="https://www.svgrepo.com/show/452229/instagram-1.svg" alt="Instagram" className="w-6 h-6" />
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="text-gray-900 hover:text-black">
                    <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Twitter" className="w-6 h-6" />
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="text-gray-900 hover:text-black">
                    <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="Twitter" className="w-6 h-6" />
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="text-gray-900 hover:text-black">
                    <img src="https://www.svgrepo.com/show/303364/pinterest-1-logo.svg" alt="Twitter" className="w-6 h-6" />
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="text-gray-900 hover:text-black">
                    <img src="https://www.iconpacks.net/icons/free-icons-6/free-icon-twitter-x-logo-black-square-rounded-20852.png" alt="Twitter" className="w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>
           
          </div>
          <br></br>
          <div className="text-center mt-8 text-gray-400">
            <p>&copy; 2024 Your Website. All rights reserved.</p>
          </div>
        </footer>
      );
    };
    
export default Footer;
