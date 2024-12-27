import { useState } from "react";

const Contact = () => {
  const [mail, setMail] = useState();
  const [message, setMessage] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submited", mail, message);
  }

  return (
    <>
      <div className="h-[100vh]">
        <p>Help Form Page</p>

        <form onSubmit={onSubmit}>
          <label htmlFor="mail">Email</label>
          <input
            type="text"
            id="mail"
            onChange={(e) => {
              console.log("----",e.target.value)
              setMail(e.target.value);
            }}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
