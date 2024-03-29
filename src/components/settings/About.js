import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="mb-10">
      <p className="font-semibold text-2xl hidden xl:block dark:text-white">
        About
      </p>
      <div className="flex mt-5 items-end">
        <img
          src={require("../../img/devlogo.png")}
          alt="nite-icon"
          className="w-20 shadow-md rounded-2xl"
        />
        <div className="ml-5">
          <p className="font-semibold text-xl dark:text-neutral-200">Nite</p>
          <p className="text-md text-gray-500 dark:text-neutral-400">
            Development version
          </p>
        </div>
      </div>
      <p className="mt-5 font-semibold text-xl dark:text-neutral-200">
        Socials
      </p>
      <div className="flex flex-col mt-3">
        <a
          href="https://nite.is"
          className="text-gray-500 dark:text-neutral-300"
        >
          Landing page
        </a>
        <a
          href="https://twitter.com/joinnite"
          className="text-gray-500 dark:text-neutral-300"
        >
          Twitter
        </a>
        <a
          href="https://www.instagram.com/niteinc/"
          className="text-gray-500 dark:text-neutral-300"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}

export default About;
