import React, { useEffect, useState } from "react";
import "./Projects.css";
import Navbars from "../../Components/Navbars/Navbars";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";

const Projects = () => {
  const [products, setProducts] = useState([]);
   const [smallproducts, setSmallproducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://back.azizjon-usmonaliyev.uz/works`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {
    axios
      .get(`https://back.azizjon-usmonaliyev.uz/smallWroks`)
      .then((res) => setSmallproducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <Navbars />
      <div className="Projects_container">
        <div className="projects">
          <h3 className="big_project">Projects</h3>

          <div className="projects_row">
            {products.map((products) => {
              return (
                <React.Fragment key={products.id}>
                  <div className="projects_cart">
                    <img
                      className="cart_img"
                      src={process.env.PUBLIC_URL + "/Images/" + products.img}
                      alt=""
                    />
                    <div className="cart_text">
                      <p> {products.title} </p>
                      <p> {products.languages} </p>
                      <p> {products.text} </p>
                      <div className="cart_but">
                        <a className="cart_button" href={products.codes}>
                          Code
                        </a>
                        <a className="cart_button" href={products.live}>
                          Live
                        </a>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>

          <h3 className="Small_project">Small Projects</h3>

          <div className="small_projects_row">
            {smallproducts.map((smallproducts) => {
              return (
                <React.Fragment key={smallproducts.id}>
                  <div className="small_projects_cart">
                    <div className="cart_text">
                      <p> {smallproducts.title} </p>
                      <p> {smallproducts.languages} </p>
                      <p> {smallproducts.text} </p>
                      <div className="cart_but">
                        <a className="cart_button" href={smallproducts.codes}>
                          Code
                        </a>
                        <a className="cart_button" href={smallproducts.live}>
                          Live
                        </a>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Projects;
