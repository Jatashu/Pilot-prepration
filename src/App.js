import "./App.css";
import About from "./components/about/AboutPage";
import Navbar from "./components/header/Navbar";
import Slider from "./components/slider/Slider";
import AboutPage from "./components/about/AboutPage";
import Service from "./components/service/Service";
import Eligibility from "./components/eligibility/Eligibility";
import Price from "./components/pricing/Price";
import Expert from "./components/expertpage/ExpertPage";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Wave from "./components/wave/Wave";
import Top from "./components/topbutton/TopButton";
import Flag from "./components/flag/Flag";
import Testimonials from "./components/testimonials/Testimonials";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="home" smooth></Link>
        <Navbar />
        <Slider />
        {/* <Wave /> */}
        <Link to="about" smooth></Link>
        <AboutPage />
        <Link to="#service" smooth></Link>

        <Service />
        <Eligibility />
        {/* <Flag /> */}
        <Testimonials />
        <Expert />
        {/* <Price /> */}
        <Link to="team" smooth></Link>
        <Team />
        <Link to="contact" smooth></Link>
        <Contact />
        <Footer />
        <Top />
      </div>
    </BrowserRouter>
  );
}

export default App;
