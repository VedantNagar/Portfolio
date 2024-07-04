import React from "react";
import pic from "../assets/hero-img.png";
const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap border-neutral-900 pl-6 pt-24">
        <div className="flex flex-col items-center lg:items-start lg:w-1/2">
          <h1 className="text-6xl font-thin tracking-tight text-white lg:mt-14 mb-16 text-center">
            Vedant Nagar
          </h1>
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-3xl tracking-tight text-transparent bg-clip-text ">
            Full Stack Developer
          </span>
          <p className="my-2 py-4 font-light tracking-tight lg:pl-0 text-white">
            A Fullstack web developer with a passion for building beautiful and
            functional websites. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Porro, accusamus nemo dolorum magni error maiores
            tenetur quisquam exercitationem sequi architecto quasi similique
            vel. Facere ea enim accusamus nulla, unde numquam eaque dolor
            excepturi quod placeat nihil totam non distinctio sit dolore quo!
            Incidunt doloribus odit, pariatur eveniet ad est quo.
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
