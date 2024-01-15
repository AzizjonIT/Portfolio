import React from "react";
import "./Home.css";
import Navbars from "../../Components/Navbars/Navbars";
import Footer from "../../Components/Footer/Footer";

import User from "../Image/user.jpg";

const Home = () => {
  return (
    <React.Fragment>
      <Navbars />
      <div className="Home_container">
        <img className="home_user" src={User} alt="" />
        <div className="home">
          <div className="home_text">
            <h1 className="home_name">Azizjon Usmonaliyev</h1>
            <h2 className="home_dev">Front-End Developer</h2>
            <hr className="home_hr" />
            <p className="home__p">
              “I am a qualified Front-End developer specializing in website
              development. I am currently improving my experience and I'm
              creating a lot of websites”
            </p>
            <hr className="home__hr" />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
