import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../images/logo/pilot_whitetextonly.png";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  return (
    <>
      <nav className={`nav ${isSticky ? "sticky" : ""}`} id="home">
        <a href="#" className="nav__brand">
          <img className="logo rounded-0" src={logo} alt="team image" />
          {/* Pilot Preparation Academy */}
        </a>
        <ul className={active}>
          <li className="nav__item">
            <a href="#header" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#benefits" className="nav__link">
              Benefits
            </a>
          </li>
          <li className="nav__item">
            <a href="#eligibility" className="nav__link">
              Eligibility
            </a>
          </li>
          <li className="nav__item">
            <a href="#team" className="nav__link">
              Team
            </a>
          </li>

          <li className="nav__item">
            <a href="#contact" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
