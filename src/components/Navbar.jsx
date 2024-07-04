import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-6 backdrop-blur">
        <div></div>
        <div className="flex items-center gap-4 text-3xl m-6 pr-2">
          <FaLinkedin className="text-[#0A66C2]" />
          <FaGithub className="text-white" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
