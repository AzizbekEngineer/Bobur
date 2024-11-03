import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <form className="contact__form">
          <label htmlFor="">
            Phone
            <input type="text" />
          </label>
          <label htmlFor="">
            Email
            <input type="text" />
          </label>
          <label htmlFor="">
            Description
            <textarea name="" id=""></textarea>
          </label>
          <button>Send to</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
