import React from "react";
import pic from "../assets/hero-img.png";
const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap border-neutral-900 pl-6 pt-24">
        <div className="flex flex-col items-center lg:items-start lg:w-1/2">
          <h1 className="text-6xl font-thin tracking-tight text-white lg:mt-14 mb-10 text-center">
            Vedant Nagar
          </h1>
          <span className="bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 text-3xl tracking-tight text-transparent bg-clip-text ">
            Full Stack Developer
          </span>
          <p className="my-2 py-4 font-light tracking-tight lg:pl-0 text-white">
            Hello! I'm Vedant Nagar, a passionate fullstack web developer with a
            strong foundation in Computer Science and Technology. I am currently
            pursuing my Bachelor of Technology from Maharaja Agrasen Institute
            of Technology, New Delhi, and will graduate in 2025.
            <div>
              My skills encompass both Front-end and Back-end development, as
              well as Databases, enabling me to build dynamic and responsive web
              applications. I am excited to leverage my technical knowledge and
              problem-solving abilities to create innovative and efficient
              solutions in the field of web development.
            </div>
          </p>
        </div>
        <div className="flex justify-center w-full lg:w-2/5">
          <img
            src={pic}
            alt="Coding"
            className=" lg:h-4/5 object-cover pt-10"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
