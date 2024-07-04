import React from "react";
import { FaGithub } from "react-icons/fa6";
import projects from "../content/projects.js";

const Project = () => {
  return (
    <div className=" p-5 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-8">My Projects</h1>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-900 text-white m-3 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-full md:w-5/12"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-col flex-wrap">
              <div className="flex justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:underline"
                >
                  View Project
                </a>
                <a href={project.git} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-white text-3xl p-1 hover:bg-purple-500 hover:shadow-lg hover:rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
