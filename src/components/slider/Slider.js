import React from "react";
import { Carousel } from "react-bootstrap";
import "./slider.css";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <div className="hero__slider">
            <div className="inner__slider">Pilot Preparation Academy</div>
            <div className="slider__content1 container">
              <a>“Speeding Up Your Success”</a>
              <p>
                Unlock your dream of becoming a Pilot with personalised
                mentorship,
                <br /> DGCA based resources, and a supportive community at our
                academy.
              </p>
            </div>
            <div className="btn_slider">
              <button className="slider_btn">Book a FREE Class</button>
            </div>
            <h5>Limited seats available</h5>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div className="hero__slider2 d-block w-100">
            <div className="inner__slider"> Learn With The Experts </div>
            <div className="slider__content container">
              We achieve an impressive 85% success rate by offering highly
              personalized
              <br />
              coaching that is not only cost-effective but also time-efficient.
              <br /> Our tailored approach ensures effective results within a
              defined timeframe.
            </div>
            <div className="btn_slider">
              <button className="slider_btn">Book a FREE Class</button>
            </div>
            <h5>Limited seats available</h5>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero__slider3 d-block w-100">
            <div className="inner__slider">New to This Field? </div>
            <div className="slider__content container">
              You wish to become a pilot but have no clue about the process?
              <br />
              Talk to our experts for free to know all the steps in detail.
            </div>
            <div className="btn_slider">
              <button className="slider_btn">Talk to Our Expert</button>
            </div>
            <h5>Limited seats available</h5>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
