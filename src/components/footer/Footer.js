import React from "react";
import "./footer.css";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <p className="p_text1">Pilot Preparation Academy</p>
      <p className="p_text2">“Speeding Up Your Success”</p>
      <div className="social">
        <a href="https://www.youtube.com/channel/UCvCwagsL5DV_RBhq2XvBaKg">
          <AiFillYoutube className="social_icon" />
        </a>
        <a href="https://www.facebook.com/pilotpreparation">
          <FaFacebookF className="social_icon" />
        </a>
        <a href="https://www.instagram.com/pilotpreparation/">
          <AiOutlineInstagram className="social_icon" />
        </a>
        <a href="https://t.me/pilotpreparation">
          <FaTelegramPlane className="social_icon" />
        </a>
        <a href="https://chat.whatsapp.com/DbGhKlZfMYFJttiBdNV6y3">
          <BsWhatsapp className="social_icon" />
        </a>
      </div>
      <p className="p_text3">
        © Copyright Pilot Preparation Academy. All Rights Reserved
      </p>
      {/* <div className="footer_box">
        Designed by &nbsp; <a href=""> BootstrapMade</a>
      </div> */}
    </div>
  );
};

export default Footer;
