import React from "react";

export default function About() {
  return (
    <section id="banner">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0 items-center">
          <img
            className="object-cover object-center rounded-full mx-auto w-64 h-64"
            alt="profile"
            src="./cropped-profile.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">
            About Me
          </h1>
          <p className="mb-8 leading-relaxed">
          Placeholder for work history.
          </p>
        </div>
      </div>
      <div className="container mx-auto flex px-10 md:py-4 md:flex-row flex-col items-start">
        <div className="mb-8 sm:ml-4 leading-relaxed sm:w-1/2">
          <p className="mb-4">I am a Full-Stack Web Developer with a passion for learning.</p>
          <p className="mb-4">My interest in software engineering started to blossom as I began looking further into potential solutions to problems in the L&D field. At this point, I knew that I wanted to have a career where I could contribute hands-on to these solutions. My long term goal is to create apps that improve the way we learn and grow. 🌱 🚀</p>
          <p>When I'm not coding, you can find me walking my dog or eating at one of my favorite restaurants around Tokyo. Pizza, anyone?</p>
        </div>
      </div>
    </section>
  );
}
