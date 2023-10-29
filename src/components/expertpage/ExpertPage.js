import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./expertpage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WhatsApp from "../images/whats-app.png";

const ExpertPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x9fu9ka",
        "template_9yfromh",
        form.current,
        "eurSS5woWB2TCAJr_"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("Our Team will soon reach out to you. :)", { position: "bottom-right" });
    setSubmitted(true);
  };

  return (
    <>
      <div className="expert_box col-lg-12" id="BookFreeSession">
        <div className="container main_call_box">
          <div className="col-sm-12">
            <h2 className="my-5">
              Book a free counseling session with us to resolve all your doubts
              and queries about pursuing a career as a Pilot :
            </h2>

            <div className="expert_box1">
              <div className="expert_box2 Regular shadow">
                {!submitted ? (
                  <form className="row g-3" ref={form} onSubmit={sendEmail}>
                    <h1>Please fill out the form below:</h1>
                    <div className="expert_ col-md-3 mt-5">
                      <label className="form-label">First name</label>
                      <div className="text-dark">
                        <input
                          type="text"
                          name="first_name"
                          className="form-control"
                          placeholder="First name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-3 mt-5">
                      <label className="form-label">Last Name</label>
                      <div className="text-dark">
                        <input
                          type="text"
                          name="last_name"
                          className="form-control"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-3 mt-5">
                      <label className="form-label">Email</label>
                      <div className="text-dark">
                        <input
                          type="email"
                          name="user_email"
                          className="form-control"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-3 mt-5">
                      <label className="form-label">Phone Number</label>
                      <div className="text-dark">
                        <input
                          name="message"
                          placeholder="Number"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="text-dark input_box">
                      <button name="submit" type="submit" value="Send">
                        SUBMIT
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="join_box">
                    <div className="inner_join1">
                      Join the Pilot Preparation Academy WhatsApp community,
                      where aspiring and established pilots come together for
                      the latest updates and engaging discussions. Join us now!
                    </div>
                    <div className="inner_join2">
                      <img
                        className="WhatsApp"
                        src={WhatsApp}
                        alt="team image"
                      />
                      <p>Our WhatsApp Community:</p>
                      <a href="https://chat.whatsapp.com/DbGhKlZfMYFJttiBdNV6y3">
                        <button>Join</button>
                      </a>
                    </div>
                  </div>
                )}
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertPage;
