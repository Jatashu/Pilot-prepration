import React from "react";
import "./service.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Demand from "../images/demand.png";
import Income from "../images/income3.png";
import Healty from "../images/beach.png";
import Challange from "../images/challange1.png";
import Excitement from "../images/excitement3.png";
import Unique from "../images/dream.png";

const Service = () => {
  return (
    <>
      <div className="container" id="service">
        <div className=" label-1  pt-5">
          <h4 className="pt-5">BENEFITS OF BECOMING A PILOT</h4>
          <hr />
        </div>
        <div className="label-2">WHY YOU SHOULD BECOME A PILOT?</div>

        <div className="service_box col-lg-11 ">
          <div className="service_box1 col-lg-4 Regular shadow">
            <div className="image_box">
              <img className="benefit_img" src={Demand} alt="team image" />
            </div>
            <div className="social_content">
              <h3>High Demand</h3>
              <p>
                Up to 3000+ pilots needed every year in India alone(Increasing
                every year).
              </p>
            </div>
          </div>

          <div className="service_box2 col-lg-4 Regular shadow">
            <div className="image_box">
              <img className="benefit_img" src={Income} alt="team image" />
            </div>
            <div className="social_content">
              <h3>High Earning</h3>
              <p>Earn up to Rs.9 Lac per month (Higher &nbsp;in abroad).</p>
            </div>
          </div>

          <div className="service_box2 col-lg-4 Regular shadow">
            <div className="image_box">
              <img className="benefit_img" src={Healty} alt="team image" />
            </div>
            <div className="social_content">
              <h3>Dream Lifestyle</h3>
              <p>
                Five star hotel stay during layovers. Sky is&nbsp; your office.
                Travel to different places & try different cuisines.
              </p>
            </div>
          </div>
        </div>

        <div className="service_box_second col-lg-11">
          <div className="service_box1 col-lg-4 Regular shadow">
            <div className="image_box">
              <img className="benefit_img" src={Challange} alt="team image" />
            </div>
            <div className="social_content">
              <h3>Challenging</h3>
              <p>
                Flying an a/c is a highly skilled profession that requires
                continuous learning & problem-solving.
              </p>
            </div>
          </div>

          <div className="service_box2 col-lg-4 Regular shadow">
            <div className="image_box">
              <img className="benefit_img" src={Excitement} alt="team image" />
            </div>
            <div className="social_content">
              <h3>Thrill and Excitement</h3>
              <p>
                Flying provides an adrenaline rush, especially during takeoffs,
                landings, and in challenging weather conditions.
              </p>
            </div>
          </div>

          <div className="service_box2 col-lg-4 Regular shadow">
            <div className="image_box">
              <img className="benefit_img" src={Unique} alt="team image" />
            </div>
            <div className="social_content">
              <h3>Unique</h3>
              <p>
                Becoming a pilot of the fastest mode of transport which costs
                600 Cr+ is uncommon in all society & thus special.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
