import React from "react";

const Contact = () => {
  return (
    <>
      <div className="flex flex-wrap m-28">
        <div className="flex text-white lg:w-1/2">
          <div className="font-mono text-center">
            <h2 className="font-bold text-6xl m-2">Get in Touch</h2>
            <h3 className="mx-2 my-6">I'd Love to hear from you!</h3>
          </div>
        </div>
        <div className="flex flex-col text-white lg:w-1/2">
          <form className="flex flex-col m-2">
            <label className="text-lg" htmlFor="name">
              Name
            </label>
            <input
              className="p-2 m-2 rounded-lg text-black"
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
            />
            <label className="text-lg" htmlFor="email">
              Email
            </label>
            <input
              className="p-2 m-2 rounded-lg text-black"
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
            />
            <label className="text-lg" htmlFor="message">
              Message
            </label>
            <textarea
              className="p-2 m-2 rounded-lg text-black"
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Your message..."
            ></textarea>
            <button className="bg-transparent text-blue-400 p-2 m-2 rounded-lg border-4 border-blue-500 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-transform duration-300 hover:scale-110 lg:mx-7">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
