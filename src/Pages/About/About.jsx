import React from "react";
import "./About.css";
import Navbars from "../../Components/Navbars/Navbars";
import Footer from "../../Components/Footer/Footer";
import Aboutuser from "../Image/user-about.jpg";
import Certificate from "../../Components/Certificate.jsx";
import Button from "react-bootstrap/Button";


const About = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <React.Fragment>
      <Navbars />
      <div className="Home_container">
        <div className="about">
          <div className="about_image">
            <img className="about_img" src={Aboutuser} alt="" />
          </div>
          <div className="about_text">
            <div className="about_title">
              I am an enthusiastic and skilled Front-End programmer who
              specializes in website development with the help of React.js. In
              advance, I use creating interesting user interfaces using a strong
              footing in technology. And I, on September 12, 2023, completed a
              six-month Front-End development course at the IT Academy and
              received an A+certificate. I'm currently building a lot of
              websites, increasing my experience
            </div>
            <div className="about_ul">
              <li>HTML5, CSS3, SCSS</li>
              <li>JavaScript, Bootstrap</li>
              <li>React.JS, React-Bootstrap</li>
              <li>JSON API, Axios, Git </li>
              <li>Netlify, Vercel, Figma</li>
            </div>
            <>
              <button id="about_button" onClick={() => setModalShow(true)}>
                Certificates
              </button>

              <Certificate
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default About;
