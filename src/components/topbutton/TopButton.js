import React, { useState, useEffect } from "react";
import "./topbutton.css";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button onClick={scrollToTop} className="scroll-to-top-button">
        <AiOutlineArrowUp className="top_icon" />
      </button>
    )
  );
};

export default ScrollToTopButton;
