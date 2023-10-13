import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import { Fragment } from "react";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-800 bg-gray-100 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-5">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-800">
            Projects
          </h1>
        </div>
        <div className="flex flex-col items-start -m-4">
          {projects.map((project) => (
            <div key={project.image} className="flex flex-col-reverse sm:flex-row w-full sm:p-8 p-4 sm:border-b border-gray-300">
              <a href={project.link}>
                <img
                  alt="gallery"
                  className="w-full object-cover object-center shadow-xl"
                  style={{ height: '250px', width: '1000px' }}
                  src={project.image}
                />
              </a>
              <div className="sm:ml-4 flex-row mb-6">
                <h2 className="sm:text-xl sm:text-left mb-2 text-2xl font-semibold">{project.title}</h2>
                <p className="text-left">
                  {project.description}
                </p>
              </div>
              <br></br>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
