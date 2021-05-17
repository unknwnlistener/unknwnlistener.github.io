import React from "react";
import "../styles/contact.css";
import { useForm, ValidationError } from "@formspree/react";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mvodzeby");

  return (
    <div className="content-container spacing">
      <div className="content contact">
        <h1>Connect with me!</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              className="form__input"
              type="text"
              name="name"
              id="name"
              autocomplete="off"
              disabled={state.succeeded}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-container">
            <input
              className="form__input"
              id="email"
              type="email"
              name="email"
              disabled={state.succeeded}
            />
            <label htmlFor="email">Email</label>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="input-container">
            <textarea
              rows="5"
              className="form__input"
              id="message"
              name="message"
              autocomplete="off"
              disabled={state.succeeded}
            />
            <label htmlFor="message">Message</label>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact Form Submission"
          />
          <button type="submit" disabled={state.submitting || state.succeeded}>
            {state.succeeded ? "Submitted" : "Submit"}
          </button>
          {state.succeeded ? <p>Thanks for joining!</p> : ""}
        </form>
      </div>
    </div>
  );
};
