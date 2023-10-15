import React, { useState, useEffect } from "react";
import Map from "./Map";
import { locations } from "../data";
import './About.css';

export default function About() {
  const [showMap, setShowMap] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * locations.length);
    setCurrentLocation(locations[randomIndex]);
  }, []);

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
      <div className="container mx-auto flex px-10 md:py-4 md:flex-row flex-col items-center justify-center">
        <div className="mb-8 leading-relaxed sm:w-3/4">
          <p className="mb-4">I am a Full-Stack Web Developer with a passion for learning.</p>
          <p className="mb-4">
            My interest in software engineering started to blossom as I began looking further into potential solutions to problems in the L&D field. At this point, I knew that I wanted to have a career where I could contribute hands-on to these solutions. My long term goal is to create apps that improve the way we learn and grow. 🌱 🚀
          </p>
          <p className="mb-4"> When I'm not coding, you can find me walking my dog or eating at one of my favorite restaurants around Tokyo. </p>
          <p className="font-medium cursor-pointer flashing-text" onClick={() => setShowMap(!showMap)}>
            {currentLocation && currentLocation.description}, anyone? 👉
          </p>
        </div>
      </div>
        {showMap && <div className="container mx-auto flex px-10 md:py-4 md:flex-row flex-col items-center justify-center sm:w-3/4">
          <Map
            lat={currentLocation && currentLocation.coordinates.lat}
            lng={currentLocation && currentLocation.coordinates.lng}
            address={currentLocation && currentLocation.address}
            name={currentLocation && currentLocation.name}
            link={currentLocation && currentLocation.link}
          />
        </div>}
    </section>
  );
}
