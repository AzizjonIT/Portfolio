import React from "react";
import "./Footer.css";
import { FaTelegramPlane } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer_title">
          <Link className="Link_navbars" to={"/"}>
            <h4 className="footer_h4">Coder</h4>
          </Link>
        </div>
        <div className="footer_icons">
          <a href="tel:+998958982326">
            <BsFillTelephoneFill id="icons" />
          </a>
          <a href="https://github.com/AzizjonIT">
            <IoLogoGithub id="icons" />
          </a>
          <a href="https://t.me/Usmonaliyev_602">
            <FaTelegramPlane id="icons" />
          </a>
          <a href="https://www.instagram.com/usmonaliyev.602/">
            <BsInstagram id="icons" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
