import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap border-neutral-900">
        <div className="flex flex-col items-center lg:items-start lg:w-1/2">
          <h1 className="text-6xl font-thin tracking-tight text-white lg:mt-14 mb-16">
            Vedant Nagar
          </h1>
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-3xl tracking-tight text-transparent bg-clip-text ">
            Full Stack Developer
          </span>
          <p className="my-2 py-4 font-light tracking-tight text-white">
            A Fullstack web developer with a passion for building beautiful and
            functional websites. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Consequuntur amet necessitatibus eligendi dolores
            suscipit laboriosam, esse facilis explicabo minima a quibusdam
            excepturi, debitis aut, sit ipsam nemo maiores delectus
            exercitationem tempore quis? Harum molestiae iste veritatis
            architecto voluptatum aliquam odio excepturi voluptate, fugit
            praesentium a sint eum rem. Ipsum consequatur enim suscipit modi
            rerum in sapiente quibusdam ullam asperiores ab.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
