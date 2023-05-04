import React from "react";
import { useForm, ValidationError } from "@formspree/react";


const ContactForm = () => {
  const [state, handleSubmit] = useForm("mrgvjqpn");
  if (state.succeeded) {
    return <p>Thank You for Message!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" type="name" name="name" placeholder="Your name..." />
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" placeholder="Your email..." />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message"> Message</label>
      <textarea id="message" name="message" placeholder="Write Your Message Here..." />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
