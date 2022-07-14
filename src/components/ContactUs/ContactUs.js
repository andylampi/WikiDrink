import React from "react";
import Footer from "../Footer/Footer";

const ContactUs = () => {
  return (
    <>
    <div className="principal">
      <div className="contact_white"></div>
      <div className="contact_linear"></div>
      <div className="title_subtitle">
        <h2>Vorresti aggiungere un cocktail?</h2>
        <h4>
          Il nostro team è sempre disponibile per valutare possibili nuove
          ricette ed ad aggiungerle alla nostro database
        </h4>
      </div>
      <div className="contact_form">
        <form>
          <div className="contact_form_input">
            <label>NOME</label>
            <input placeholder="Daniel"></input>
          </div>
          <hr />
          <div className="contact_form_input">
            <label>COGNOME</label>
            <input placeholder="Tamarindo"></input>
          </div>
          <hr />
          <div className="contact_form_input">
            <label>EMAIL</label>
            <input placeholder="daniel.tamarindo@esempio.com"></input>
          </div>
          <hr />
          <div className="contact_form_input">
            <label>TELEFONO</label>
            <input placeholder="555 555-5555"></input>
          </div>
          <hr />
          <div>
            <label>LA TUA RICETTA</label>
            <textarea placeholder="descrivi la tua ricetta"></textarea>
          </div>
          <div className="contact_button_space">
            <button className="contact_button">INVIA RICETTA</button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactUs;
