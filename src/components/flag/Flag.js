import React from "react";
import "./flag.css";
import Country from "../images/flag1.gif";
import Country2 from "../images/flag2.gif";
import Country3 from "../images/flag3.gif";
import Country4 from "../images/flag4.gif";
import Country5 from "../images/flag5.gif";
import Country6 from "../images/flag6.gif";
import Country7 from "../images/flag7.gif";
import Country8 from "../images/flag8.gif";
import Country9 from "../images/flag9.gif";

const Flag = () => {
  return (
    <div className="flag_box col-lg-12">
      <div className="container">
        <div className="label_flag">
          We assist students to choose from different flying schools across the
          globe:
        </div>

        <div className="main_flag_box">
          <div className="inner_flag_box">
            <img className="country_img" src={Country} alt="team image" />
            <p>INDIA</p>
          </div>

          <div className="inner_flag_box2">
            <img className="country2_img" src={Country2} alt="team image" />
            <p>UNITED STATES </p>
          </div>

          <div className="inner_flag_box2">
            <img className="country2_img" src={Country3} alt="team image" />
            <p>SOUTH AFRICA</p>
          </div>

          <div className="inner_flag_box2">
            <img className="country2_img" src={Country4} alt="team image" />
            <p>AUSTRALIA</p>
          </div>

          <div className="inner_flag_box2">
            <img className="country2_img" src={Country5} alt="team image" />
            <p>NEW ZEALAND</p>
          </div>

          <div className="inner_flag_box2">
            <img className="country2_img" src={Country6} alt="team image" />
            <p>SPAIN</p>
          </div>

          <div className="inner_flag_box2">
            <img className="country2_img" src={Country7} alt="team image" />
            <p>CANADA</p>
          </div>

          <div className="inner_flag_box2">
            <img className="country2_img" src={Country8} alt="team image" />
            <p>ARGENTINA</p>
          </div>

          <div className="inner_flag_box2">
            <img className="country2_img" src={Country9} alt="team image" />
            <p>PHILIPPINES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flag;
