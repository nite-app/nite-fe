import React, { useEffect, useState } from "react";

function Appearance() {
  const [lightSelected, setLightSelected] = useState(
    "rounded-lg border-blue-600 border-4 cursor-pointer md:rounded-xl lg:rounded-2xl"
  );
  const [darkSelected, setDarkSelected] = useState(
    "rounded-lg border-white border-4 cursor-pointer md:rounded-xl lg:rounded-2xl dark:border-neutral-800"
  );
  const [lightText, setLightText] = useState("✔️ Light");
  const [darkText, setDarkText] = useState("Dark");

  const setDarkTheme = () => {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  };

  const setLightTheme = () => {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setLightSelected(
        "rounded-lg border-white border-4 cursor-pointer md:rounded-xl lg:rounded-2xl dark:border-neutral-800"
      );
      setDarkSelected(
        "rounded-lg border-blue-600 border-4 cursor-pointer md:rounded-xl lg:rounded-2xl"
      );
      setLightText("Light");
      setDarkText("✔️ Dark");
    }
  }, []);

  var metaThemeColor = document.querySelector("meta[name=theme-color]");

  function darkDoc() {
    metaThemeColor.setAttribute("content", "#171717");
  }
  function lightDoc() {
    metaThemeColor.setAttribute("content", "#ECECEC");
  }

  return (
    <div className="mb-10">
      <p className="font-semibold text-2xl hidden xl:block dark:text-white">
        Appearance
      </p>
      <div className="mt-6">
        <p className="font-semibold text-lg mb-4 dark:text-neutral-200">
          Theme
        </p>
        <div className="flex">
          <div className="mr-4 max-w-[250px]">
            <img
              src={require("../../img/appearancelight.png")}
              alt="appearancelight"
              className={lightSelected}
              onClick={() => {
                setLightTheme();
                lightDoc();
                setLightSelected(
                  "rounded-lg border-blue-600 border-4 cursor-pointer md:rounded-xl lg:rounded-2xl"
                );
                setDarkSelected(
                  "rounded-lg border-white border-4 cursor-pointer md:rounded-xl lg:rounded-2xl dark:border-neutral-800"
                );
                setLightText("✔️ Light");
                setDarkText("Dark");
              }}
            />
            <p className="font-medium text-sm mt-2 dark:text-neutral-200">
              {lightText}
            </p>
          </div>
          <div className="max-w-[250px]">
            <img
              src={require("../../img/appearancedark.png")}
              alt="appearancedark"
              className={darkSelected}
              onClick={() => {
                setDarkTheme();
                darkDoc();
                setLightSelected(
                  "rounded-lg border-white border-4 cursor-pointer md:rounded-xl lg:rounded-2xl dark:border-neutral-800"
                );
                setDarkSelected(
                  "rounded-lg border-blue-600 border-4 cursor-pointer md:rounded-xl lg:rounded-2xl"
                );
                setLightText("Light");
                setDarkText("✔️ Dark");
              }}
            />
            <p className="font-medium text-sm mt-2 dark:text-neutral-200">
              {darkText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appearance;
