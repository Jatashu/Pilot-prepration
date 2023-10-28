import React from "react";
import "./team.css";
import team1 from "../images/team1.jpg";
import team2 from "../images/team2.png";
import team3 from "../images/team3.jpg";
import team4 from "../images/team4.png";
import team5 from "../images/team5.jpg";
import team6 from "../images/team6.jpg";
import team7 from "../images/team3.jpg";
import team8 from "../images/team8.jpg";

const Team = () => {
  return (
    <>
      <div className="container pt-5" id="team">
        <div className="label-1 pt-5">
          <h4 className="pt-5">TEAM</h4>
          <hr />
        </div>
        <div className="label-2">OUR GROUND INSTRUCTORS</div>

        <div className="team_box col-lg-11">
          <div className="team_box1 col-lg-3 Regular shadow">
            <img
              className="img_team rounded-top"
              src={team1}
              alt="team image"
            />

            <p className="p_name">Guru Chaudhary</p>
            <p className="p_post"> Co-founder and CEO</p>
          </div>
          <div className="team_box2 col-lg-3 Regular shadow">
            <img
              className="img_team rounded-top"
              src={team2}
              alt="team image"
            />
            <p className="p_name">Rishi Chaudhary</p>
            <p className="p_post">Co-founder and Head of Academics</p>
          </div>
          <div className="team_box2 col-lg-3 Regular shadow">
            <img
              className="img_team rounded-top"
              src={team3}
              alt="team image"
            />
            <p className="p_name">Jitender Bhati</p>
            <p className="p_post">Outreach Advisor</p>
          </div>
          {/* <div className="team_box2 col-lg-3 Regular shadow">
            <img
              className="img_team rounded-top"
              src={team4}
              alt="team image"
            />
            <p className="p_name">Anupam Rana </p>
            <p className="p_post">Product and Tech Advisor</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Team;

// import React from "react";
// import "./team.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import team1 from "../images/team-1.jpg";
// import img1 from "../images/rishi.png";
// import img2 from "../images/member2.jpg";
// import img3 from "../images/girl.jpg";
// import img5 from "../images/anshul.jpg";
// import img6 from "../images/member1.jpg";
// import img7 from "../images/member3.jpg";

// export default function App() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="container" id="team">
//       <div className="label-1 pt-5">
//         <h4 className="pt-5">TEAM</h4>
//         <hr />
//       </div>
//       <div className="label-2">OUR HARDWORKING TEAM</div>
//       <Slider {...settings} className="ashu">
//         <div className="card Regular shadow">
//           <img className="student" src={img6} alt="team image" />
//           <p>Guru Chaudhary</p>
//           <h4>Co-founder and CEO</h4>
//         </div>

//         <div className="card Regular shadow">
//           <img className="student" src={img1} alt="team image" />
//           <p>Rishi Chaudhary</p>
//           <h4>Co-founder and Head of Academics</h4>
//         </div>

//         <div className="card Regular shadow">
//           <img className="student" src={img2} alt="team image" />
//           <p>Jitender Bhati</p>
//           <h4>Outreach Advisor</h4>
//         </div>

//         <div className="card Regular shadow">
//           <img className="student" src={team1} alt="team image" />
//           <p>Anupam Rana</p>
//           <h4>Product and Tech Advisor</h4>
//         </div>

//         <div className="card Regular shadow">
//           <img className="student" src={img3} alt="team image" />
//           <p>Shiwani Sheoran</p>
//           <h4>PR Advisor</h4>
//         </div>

//         <div className="card Regular shadow">
//           <img className="student" src={img5} alt="team image" />
//           <p>Anshul Singh Jat</p>
//           <h4>Marketing Advisor</h4>
//         </div>

//         <div className="card Regular shadow">
//           <img className="student" src={team1} alt="team image" />
//           <p>Ashutosh Singh Jat</p>
//           <h4>Software Developer</h4>
//         </div>

//         <div className="card Regular shadow">
//           <img className="student" src={img7} alt="team image" />
//           <p>Rashmi Rana</p>
//           <h4>Design Consultant</h4>
//         </div>
//       </Slider>
//     </div>
//   );
// }
