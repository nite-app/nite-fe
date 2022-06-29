import React, { useState } from "react";

function Appearance() {
  const [lightSelected, setLightSelected] = useState(
    "rounded-lg border-blue-600 border-4 md:rounded-xl lg:rounded-2xl"
  );
  const [darkSelected, setDarkSelected] = useState(
    "rounded-lg border-white border-4 md:rounded-xl lg:rounded-2xl"
  );
  const [lightText, setLightText] = useState("✔️ Light");
  const [darkText, setDarkText] = useState("Dark");

  return (
    <div className="mb-10">
      <p className="font-semibold text-2xl hidden xl:block">Appearance</p>
      <div className="mt-6">
        <p className="font-semibold text-lg mb-4">Theme</p>
        <div className="flex">
          <div className="mr-4 max-w-[250px]">
            <img
              src={require("../../img/appearancelight.png")}
              alt="appearancelight"
              className={lightSelected}
              onClick={() => {
                setLightSelected(
                  "rounded-lg border-blue-600 border-4 md:rounded-xl lg:rounded-2xl"
                );
                setDarkSelected(
                  "rounded-lg border-white border-4 md:rounded-xl lg:rounded-2xl"
                );
                setLightText("✔️ Light");
                setDarkText("Dark");
              }}
            />
            <p className="font-medium text-sm mt-2">{lightText}</p>
          </div>
          <div className="max-w-[250px]">
            <img
              src={require("../../img/appearancedark.png")}
              alt="appearancedark"
              className={darkSelected}
              onClick={() => {
                setLightSelected(
                  "rounded-lg border-white border-4 md:rounded-xl lg:rounded-2xl"
                );
                setDarkSelected(
                  "rounded-lg border-blue-600 border-4 md:rounded-xl lg:rounded-2xl"
                );
                setLightText("Light");
                setDarkText("✔️ Dark");
              }}
            />
            <p className="font-medium text-sm mt-2">{darkText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appearance;
