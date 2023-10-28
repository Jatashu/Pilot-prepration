import React from "react";
import "./testimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="container pt-5">
      <div className="label-1">
        <h4 className="pt-5">TESTIMONIALS</h4>
        <hr />
      </div>
      <div className="label-2">WHAT THEY ARE SAYING ABOUT US</div>
      <Slider {...settings} className="testimonial_box">
        <div className="box2_inner2 col-lg-5">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/xKmYT1sM1p0?si=h4wGOBbMzDtBX-_P"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="box2_inner2 col-lg-5">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/DBSK2wATbfQ?si=Zk5PD-C152F8hTdS"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="box2_inner2 col-lg-5">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/QQUWoScTE9Y?si=2TbVy1l-0EweVA_l"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Slider>
    </div>
  );
}
