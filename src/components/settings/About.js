import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="mb-10">
      <p className="font-semibold text-2xl hidden xl:block">About</p>
      <div className="flex mt-10 items-end">
        <img
          src={require("../../img/logo.png")}
          alt="nite-icon"
          className="w-20 shadow-md rounded-xl"
        />
        <div className="ml-5">
          <p className="font-semibold text-xl">Nite</p>
          <p className="text-md text-gray-500">Alpha version</p>
        </div>
      </div>
      <p className="mt-5 font-semibold text-xl">Socials</p>
      <div className="flex flex-col mt-3">
        <a href="https://nite.is" className="text-gray-500">
          Landing page
        </a>
        <a href="htps://twitter.com" className="text-gray-500">
          Twitter
        </a>
        <a href="https://instagram.com" className="text-gray-500">
          Instagram
        </a>
      </div>
    </div>
  );
}

export default About;
