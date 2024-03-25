import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div className="">
    <Navbar/>
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading"><b>About</b></p>
        <h1 className="primary-heading">
        Focus on Fun and Memories!
        </h1>
        <p className="primary-text">
        Party Events Planning and Decor is one of the top event management companies, focuses on event management in Coimbatore in a way that creates a win-win situation for all involved stakeholders. Our goal is to ensure that the clients, as well as participants of the event, have an overall positive experience.
        </p>
        <p className="primary-text">
        To do this, we don’t look at building one-time associations with clients; instead, we aim at creating long-lasting collaborations that will span years to come
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
