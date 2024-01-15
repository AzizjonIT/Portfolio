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
              I am an enthusiastic and skilled Front-End Developer who
              specializes in seamless website development using React.js. In
              advance, I leverage on creating interesting user interfaces using
              a strong foundation in technology. Recently, on September 12,
              2023, I completed a six-month Front-End Development course at the
              IT Academy and received an A+ certificate. I'm currently
              increasing my experience and creating a lot of websites
            </div>
            <div className="about_ul">
              <li>HTML5, CSS3, SCSS</li>
              <li>JavaScript, Bootstrap</li>
              <li>React.JS, React Bootstrap</li>
              <li>JSON API, Axios, Git</li>
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
