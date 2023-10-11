import React from "react";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Map from "./components/Map"

export default function App() {
  return (
    <main className="text-gray-800 bg-gray-100 body-font">
      <Navbar />
      <Banner />
      <Projects />
      <About />
      <Contact />
      <Map />
    </main>
  );
}
