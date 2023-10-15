import React from "react";

export default function Banner() {
  return (
    <section id="banner">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I'm Kevin.
            <br className="hidden lg:inline-block" /> I build apps that make life a piece of cake 🍰
          </h1>
          <p className="mb-1 leading-relaxed">
            Chances are I'm also eating a piece of cake right now.
          </p>
          <p className="mb-8 leading-relaxed">
            When I'm not coding, you can find me at one of my favorite restaurants across Tokyo.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
