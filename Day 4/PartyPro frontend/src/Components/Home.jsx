import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import Work from "./Work";

const Home = () => {
  return (
    <div className="home-container">
      {/* <Navbar /> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Your Ultimate Party Experience Delivered with Style & Excitement!
          </h1>
          <p className="primary-text">
          Party Perfection, Prepped to Perfection: Our Expert Chefs Handle the Prep, from Dicing to Marinating,
           So You Can Host a Flawless Celebration
          </p>
          <button className="secondary-button">
            Book Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      {/* <Work/> */}
      
    </div>
  );
};

export default Home;
