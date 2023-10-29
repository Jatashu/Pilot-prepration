import React from "react";
import "./eligibility.css";
import { RxDoubleArrowRight } from "react-icons/rx";
import Pilot from "../images/pilot.avif";
import Best from "../images/best.jpg";

const Eligibility = () => {
  return (
    <>
      <div className="container pt-5" id="eligibility">
        <div className="label-1 pt-5">
          <h4 className="pt-5">ELIGIBILITY</h4>
          <hr />
        </div>
        <div className="label-2">WHAT IT TAKES TO BE A PILOT?</div>
        <div className="eligibility_box col-lg-12 pt-5">
          <div className="eligibility_box_inner col-lg-5">
            <img className="eligibility_img" src={Pilot} alt="team image" />
          </div>
          <div className="eligibility_box_inner2 col-lg-6">
            <p>
              <RxDoubleArrowRight className="arrow_icon" />
              &nbsp;Your age should not be less than 17 years to begin training.
            </p>

            <p>
              <RxDoubleArrowRight className="arrow_icon" />
              &nbsp;You must have scored 50% in 10+2 which may vary as per the
              Institute’s requirement.
            </p>

            <p>
              <RxDoubleArrowRight className="arrow_icon" />
              &nbsp;You must have studied MPC subjects [Maths, Physics, and
              Chemistry] along with English at the intermediate level.
            </p>
            <p>
              <RxDoubleArrowRight className="arrow_icon" />
              &nbsp;If you are a non-science student, you may pursue the
              required subjects through the National Institute of Open Schooling
              or as a private candidate from the respective state board. We
              assist students completely with that as well.
            </p>
            <p>
              <RxDoubleArrowRight className="arrow_icon" />
              &nbsp;You will need a medical certificate issued by the required
              authorities.
            </p>
          </div>
        </div>

        <div className="label-1 pt-5">
          <h4 className="pt-5">WHY US</h4>
          <hr />
        </div>
        <div className="label-2">LEARN FROM THE BEST</div>
        <div className="box2 col-lg-12 pt-5">
          <div className="box2_inner1 col-lg-7">
            <p>
              <RxDoubleArrowRight className="arrow_icon" />
              &nbsp;<b>Hardworking :</b> We devote our heart and soul to bring
              successful results.
            </p>

            <p>
              <RxDoubleArrowRight className="arrow_icon" />
              &nbsp;<b>Doubt Free Learning :</b> Students are encouraged to ask
              any number of doubts.
            </p>

            <p>
              <RxDoubleArrowRight className="arrow_icon" />
              &nbsp;<b>Fun :</b> The pace of the class is synchronous and
              entertaining.
            </p>

            <p>
              <RxDoubleArrowRight className="arrow_icon" />
              &nbsp;<b>Homework :</b> H.W. is religiously given everyday! and
              discussed the next day.
            </p>

            <p>
              <RxDoubleArrowRight className="arrow_icon" />
              &nbsp;<b>Best Deal :</b> We provide both quality and affordability
              in the same platter.
            </p>

            <p>
              <RxDoubleArrowRight className="arrow_icon" />
              &nbsp;<b>Re- Study :</b> Students are allowed to re-join us for
              doubtful topics for free.
            </p>

            <p>
              <RxDoubleArrowRight className="arrow_icon" />
              &nbsp;<b>Always Available :</b> We assist students until they
              pass.
            </p>

            <p>
              <RxDoubleArrowRight className="arrow_icon" />
              &nbsp;<b>On Time Completion :</b> Syllabus is completed for each
              student on time.
            </p>

            <p>
              <RxDoubleArrowRight className="arrow_icon" />
              &nbsp;<b>Fee in Breaks :</b> The fee can be paid in installments.
            </p>

            <p>
              <RxDoubleArrowRight className="arrow_icon" />
              &nbsp;<b>Action on Feedback :</b> We adapt with student’s
              feedback.
            </p>

            <p>
              <RxDoubleArrowRight className="arrow_icon" />
              &nbsp;<b>Connections :</b> Having some industry connections we
              also provide best career support.
            </p>
          </div>
          <div className="box2_inner2 col-lg-4">
            <div className="pilot ratio-16x9">
              <img className="pilot_img2" src={Best} alt="team image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eligibility;
