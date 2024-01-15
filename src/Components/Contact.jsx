import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbars/Navbars.css"

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  const [sendBot, setSendBot] = useState({
        name: "",
        email: "",
        message: "",
  });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      
      // console.log(e);2
        setSendBot({ ...sendBot, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = "6918214069:AAGFN-aa_Y9lO2FaiVTP7BaLuFtXka-uVYk";
            const chatId = "-1002109111622";

            const response = await fetch(
              `https://api.telegram.org/bot${token}/sendMessage`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  chat_id: chatId,
                  text: `New message!\n\nName: ${sendBot.name}\nEmail: ${sendBot.email}\nMessage: ${sendBot.message}`,
                }),
              }
            );

            const result = await response.json();
            console.log('Sent to Telegram:', result);
        } catch (error) {
            console.error('Error occurred:', error);
        }

        setSendBot({
            name: "",
            email: "",
            message: "",
        });
    }

  return (
    <>
      <Button id="contact_button" variant="light" onClick={handleShow}>
        Contact
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="contact_body">
            <p className="contact_for">For Contact </p>
            <div className="contact_wrap">
              <p className="contact_w_p"> Tel :</p>
              <p className="cantact_nmber"> +998958982326</p>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="cotacts">
            <form className="contact-right-custom-form" onSubmit={handleSubmit}>
              <input
                value={sendBot.name}
                onChange={handleInputChange}
                required
                className="input"
                type="text"
                placeholder="Telefon"
                name="name"
              />
              <input
                value={sendBot.email}
                onChange={handleInputChange}
                required
                className="input"
                type="email"
                name="email"
                placeholder="Email"
              />
              <textarea
                value={sendBot.message}
                onChange={handleInputChange}
                required
                className="textarea"
                name="message"
                cols="30"
                rows="10"
              ></textarea>
              <button className="input">Submit-message</button>
            </form>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
