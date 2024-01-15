import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Certificateimge from "../Pages/Image/certificate.jpg"
import "./Navbars/Navbars.css"

const Certificate = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="g"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
        <Modal.Header closeButton id="Certificate_body_1">
          <Modal.Title id="contained-modal-title-vcenter">
            <h5 id="Certificate_body_1">IT-Academy (A+)</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="Certificate_body">
          <img className="Certificateimge" src={Certificateimge} alt="" />
        </Modal.Body>
      </Modal>
    </div>
  );
};






export default Certificate
