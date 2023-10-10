import React from "react";
import About from "./components/About";
import Banner from ".components/Banner";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
