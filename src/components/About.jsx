import React from "react";
import pic from "../assets/hero-img.png";
const About = () => {
  return (
    <>
      <div className=" pb-4 w-screen pt-4">
        <h2 className="my-auto text-center text-4xl pb-4 text-white">
          About Me
        </h2>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8 flex items-center">
            <div className="flex justify-center w-full lg:w-4/5">
              <img
                src={pic}
                alt="Vedant Nagar"
                className=" lg:h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8">
            <p className="text-white text-lg">
              Hi, I'm Vedant Nagar, a Full Stack Developer. I have a passion for
              web development and love to create new things. I am a quick
              learner and always ready to learn new things.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
