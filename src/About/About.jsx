import React from "react";
import Fade from 'react-reveal/Fade';
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="about_heading">
          <h2 >About Us</h2>
        </div>
        <div className="aboutContent">
          <Fade left>
            <p>
              Farhan woods company is one of the oldest wooden company in Karachi,Pakistan and has been serving for 22 years.We have been manufacturing wooden items for more than a decade, and have a range of products that suit every need. From wooden doors to windows,door frames(choghat),jas iron frames,panel doors,flush doors etc we offer them all! Our team is highly experienced and always up to date with the latest techniques.
            </p>
          </Fade>
          <Fade right>
            <p>
              Doors are the most important part of our home. It provides security, privacy and protection to your family.
              We are a company that specializes in doors. We offer a wide range of products including panel doors, sliding doors, bifold doors and more. We also offer installation services for all the products we offer.
              You've got a home, but you don't have a door. We are a door company that provides all types of doors for your home or business. Whether you want a pre-fabricated steel door, or a custom-built front door, we'll work with you to find the perfect fit for your home or business.Composite materials offer greater strength, durability and insulation. The new composite materials are also environment-friendly and cost-effective. Composite materials can be used in a variety of products including doors, panels, frames and more.Quality is our main concern so we use best material for our customers. customer is always our first priority. we are committed to providing the best quality service.
            </p>
          </Fade>
        </div>
      </div>

    </>
  );
};

export default About;
