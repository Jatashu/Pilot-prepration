import React from "react";
import "./contact.css";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { BsPhone } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div className="container" id="contact">
        <div className="label-1 pt-5">
          <h4 className="pt-5">CONTACT</h4>
          <hr />
        </div>
        <div className="label-2">CONTACT US</div>

        <div className="contact_box col-lg-11">
          <div className="contact col-lg-4">
            {/* <div className="contact_box1 col-lg-12">
              <div className="inner_contact_box1 col-lg-2">
                <CiLocationOn className="contact_icon" />
              </div>
              <div className="inner_contact_box2">
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div> */}

            <div className="contact_box1 col-lg-12 pt-5">
              <div className="inner_contact_box1 col-lg-2">
                <TfiEmail className="contact_icon" />
              </div>
              <div className="inner_contact_box2">
                <h4>Email:</h4>
                <p>info@pilotpreparationacademy.com</p>
              </div>
            </div>

            <div className="contact_box1 col-lg-12 pt-5">
              <div className="inner_contact_box1 col-lg-2">
                <BsPhone className="contact_icon" />
              </div>
              <div className="inner_contact_box2">
                <h4>Call:</h4>
                <p>
                  +91-9301657163 (Rishi Chaudhary)
                  <p className="mx-0">+91-9718200388 (Jitender Bhati)</p>
                </p>
              </div>
            </div>
          </div>

          <form className="col-lg-9">
            <div className="input_name_email">
              <input placeholder="Your Name" className="input_name"></input>
              <input placeholder="Your Email" className="input_email"></input>
            </div>

            <input
              placeholder="Subject"
              className="input_subject col-lg-12"
            ></input>

            <textarea
              type="desc"
              placeholder="Message"
              className="input_message col-lg-12"
            ></textarea>

            <div className="contact_btn">
              <button className="send_btn" type="button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
