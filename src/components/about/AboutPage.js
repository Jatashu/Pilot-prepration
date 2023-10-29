import React from "react";
import "./AboutPage.css";
import { RxDoubleArrowRight } from "react-icons/rx";

const About = () => {
  return (
    <>
      <div className="container" id="about">
        <div className="label-1 pt-5">
          <h4 className="pt-5">ABOUT</h4>
          <hr />
        </div>
        <div className="label-2">Who We Are</div>
        <div className="box2 col-lg-12 pt-5">
          <div className="box2_inner1 col-lg-6">
            <p>
              <RxDoubleArrowRight className="arrow_icon" />
              &nbsp;Welcome to Pilot Preparation Academy, the leading aviation
              ground class provider in India. Founded by Guru Chaudhary (CPL) in
              response for high quality, affordable aviation knowledge. We are
              dedicated to providing top notch training and guidance to aspiring
              pilots.
            </p>

            <p>
              <RxDoubleArrowRight className="arrow_icon" />
              &nbsp;Our mission is simple: To offer detailed learning
              experiences and free counseling to future pilots, instilling the
              right skills and values needed to excel in their careers.
            </p>

            <p>
              <RxDoubleArrowRight className="arrow_icon" />
              &nbsp;We work tirelessly to ensure every student feels valued and
              supported. Join our close-knit community and let us help you
              achieve your dream of becoming a learned pilot.
            </p>
          </div>

          <div className="box2_inner2 col-lg-5">
            <div className="ratio ratio-16x9">
              <iframe className="iframeComp"
                src="https://www.youtube.com/embed/fE2_h-MPyko?si=n--JBffX9crBqdWQ"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* <div className="main_about__box col-lg-11 d-flex">
          <div className="four__box col-lg-3">
            <FaLinkedinIn className="about_icon" />
            <p>Modi sit est dela pireda nest</p>
          </div>
          <div className="four__box2 col-lg-3">
            <FaLinkedinIn className="about_icon" />
            <p>Modi sit est dela pireda nest</p>
          </div>
          <div className="four__box2 col-lg-3">
            <FaLinkedinIn className="about_icon" />
            <p>WHY ONLINE</p>
          </div>
          <div className="four__box2 col-lg-3">
            <FaLinkedinIn className="about_icon" />
            <p>Modi sit est dela pireda nest</p>
          </div>
        </div>

        <div className="main__text__box col-lg-12">
          <div className="text_box col-lg-6">
            <p className="text_box1">
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </p>
            <p className="text_box2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text_box2">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text_box2">
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </p>
            <p className="text_box2">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
            </p>
            <p className="text_box2">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
          </div>
          <div className="image col-lg-6">
            <img src={image} alt="image" />
          </div>
        </div> */}
      </div>

      {/* <div className="call_box col-lg-12">
        <div className="container main_box">
          <div className="call_box1 col-lg-10">
            <h3>Talk to our experts</h3>
            <p>
              Book a free counseling session with us to resolve all your doubts
              and queries about pursuing a career as a Pilot.
            </p>
          </div>

          <div className="call_box2 col-lg-2">
            <button className="call_btn">CALL TO ACTION</button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default About;
