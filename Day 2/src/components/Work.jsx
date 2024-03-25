import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import Navbar from "./Navbar";

const Work = () => {
  const workInfoData = [
    {
      image: 'https://www.bambooevents.co.in/images/new/wedding2.webp',
      title: "WEDDINGS",
      text: "Weddings celebrate the timeless bond of love between two individuals, marking the beginning of their journey together..",
    },
    {
      image: 'https://www.bambooevents.co.in/images/new/birthday2.webp',
      title: "BIRTHDAY PARTY",
      text: "Birthdays are joyous occasions filled with laughter, fun, and happiness as we gather with friends and family to celebrate the special day.",
    },
    {
      image: 'https://www.bambooevents.co.in/images/new/award-ceremony-event-planner.png',
      title: "DJ Night",
      text: "Enjoy the current Moments in your life with a planned DJ ",
    },
  ];
  return (
    <>
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
        </>
  );
};

export default Work;
