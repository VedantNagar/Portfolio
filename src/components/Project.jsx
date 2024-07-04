import React from "react";

const projects = [
  {
    title: "Medware - Healthcare Companion",
    description:
      "A Healthcare Website consisting of a Disease Predictor made in React, Django, Tailwind and Machine Learning.",
    image: "path-to-your-image-1",
    link: "#",
  },
  {
    title: "Swift Chat App",
    description:
      "A chat app built with WebSocket API and ws lib. MERN Stack with TailwindCSS. Feat includes realtime msg exchange and user authentication with email verification.",
    image: "path-to-your-image-2",
    link: "#",
  },
  {
    title: "Vetmedman",
    description:
      "A shopping store I created for a freelance client. GithubRepo not available for this private project.",
    image: "path-to-your-image-3",
    link: "#",
  },
];

const Project = () => {
  return (
    <div className="min-h-screen  p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className=" bg-slate-900 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} className="text-teal-300 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
