import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import Languages from "./Languages";

const TechStack = () => {
  return (
    <>
      <div>
        <h1 className="mt-20 mb-14 text-center text-4xl text-white font-semibold">
          Tech Stack
        </h1>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <div className="rounded-3xl border-4 p-3">
            <SiMongodb title="MongoDB" className="text-6xl text-green-500" />
          </div>
          <div className="rounded-3xl border-4 p-3">
            <SiExpress title="Express.js" className="text-6xl text-gray-500" />
          </div>
          <div className="rounded-3xl border-4 p-3">
            <FaReact title="React" className="text-6xl text-blue-500" />
          </div>
          <div className="rounded-3xl border-4 p-3">
            <FaNodeJs title="Node.js" className="text-6xl text-green-500" />
          </div>
          <div className="rounded-3xl border-4 p-3">
            <IoLogoJavascript
              title="JavaScript"
              className="text-6xl text-yellow-500"
            />
          </div>
          <div className="rounded-3xl border-4 p-3">
            <FaGitAlt title="Git" className="text-6xl text-red-500" />
          </div>
          <div className="rounded-3xl border-4 p-3">
            <FaGithub title="GitHub" className="text-6xl text-white" />
          </div>
          <div className="rounded-3xl border-4 p-3">
            <SiTailwindcss
              title="Tailwind CSS"
              className="text-6xl text-blue-500"
            />
          </div>
          <div className="rounded-3xl border-4 p-3">
            <FaHtml5 title="HTML5" className="text-6xl text-orange-600" />
          </div>
          <div className="rounded-3xl border-4 p-3">
            <SiMysql title="MySQL" className="text-6xl text-blue-500" />
          </div>
        </div>
        {/* Programming Languages */}
        <Languages />
      </div>
    </>
  );
};

export default TechStack;
