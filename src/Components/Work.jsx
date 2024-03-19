import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import Navbar from "./Navbar";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "WEDDINGS",
      text: "Weddings celebrate the timeless bond of love between two individuals, marking the beginning of their journey together..",
    },
    {
      image: ChooseMeals,
      title: "BIRTHDAY PARTY",
      text: "Birthdays are joyous occasions filled with laughter, fun, and happiness as we gather with friends and family to celebrate the special day.",
    },
    {
      image: DeliveryMeals,
      title: "BABY SHOWER",
      text: "Baby showers celebrate the imminent arrival of a new bundle of joy, welcoming the newest member of the family with love and excitement.",
    },
  ];
  return (
    <div>
      {/* <Navbar/> */}
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          We provide our best service for all kind of parties with satisfaction
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Work;
