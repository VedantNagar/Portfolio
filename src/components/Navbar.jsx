import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-6 backdrop-blur">
        <div></div>
        <div className="flex space-x-4">
          <FaLinkedin className="text-[#0A66C2] text-5xl p-1 hover:bg-white hover:shadow-lg hover:rounded-full hover:scale-110 transition-transform duration-300" />
          <FaGithub className="text-white text-5xl p-1 hover:bg-purple-500 hover:shadow-lg hover:rounded-full hover:scale-110 transition-transform duration-300" />
          <CgMail className="text-[#D44638] text-5xl  hover:bg-white hover:shadow-lg hover:rounded-full hover:scale-110 transition-transform duration-300" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
