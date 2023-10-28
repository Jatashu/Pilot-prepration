import React from "react";
import "./price.css";

const Price = () => {
  return (
    <>
      <div className="container">
        <div className="label-1 pt-5">
          <h4 className="pt-5">PRICING</h4>
          <hr />
        </div>
        <div className="label-2">OUR COMPETING PRICES</div>

        <div className="pirce_box col-lg-11">
          <div className="pirce_box1 col-lg-3 border ">
            <div className="inner_price_box1">Free</div>
            <div className="inner_price_box2">
              <p>0/month</p>
              <p>Aida dere</p>
              <p>Nec feugiat nisl</p>
              <p>Nulla at volutpat dola</p>
              <p>Pharetra massa</p>
              <p>Massa ultricies mi</p>
            </div>
            <div className="inner_price_box3">
              <button>Buy Now</button>
            </div>
          </div>

          <div className="pirce_box2 col-lg-3 border">
            <div className="inner_price_box1">Business</div>
            <div className="inner_price_box2">
              <p>0/month</p>
              <p>Aida dere</p>
              <p>Nec feugiat nisl</p>
              <p>Nulla at volutpat dola</p>
              <p>Pharetra massa</p>
              <p>Massa ultricies mi</p>
            </div>
            <div className="inner_price_box3">
              <button>Buy Now</button>
            </div>
          </div>

          <div className="pirce_box2 col-lg-3 border">
            <div className="inner_price_box1">Developer</div>
            <div className="inner_price_box2">
              <p>0/month</p>
              <p>Aida dere</p>
              <p>Nec feugiat nisl</p>
              <p>Nulla at volutpat dola</p>
              <p>Pharetra massa</p>
              <p>Massa ultricies mi</p>
            </div>
            <div className="inner_price_box3">
              <button>Buy Now</button>
            </div>
          </div>

          <div className="pirce_box2 col-lg-3 border">
            <div className="inner_price_box1">Ultimate</div>
            <div className="inner_price_box2">
              <p>0/month</p>
              <p>Aida dere</p>
              <p>Nec feugiat nisl</p>
              <p>Nulla at volutpat dola</p>
              <p>Pharetra massa</p>
              <p>Massa ultricies mi</p>
            </div>
            <div className="inner_price_box3">
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
