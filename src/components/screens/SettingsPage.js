import React, { useState } from "react";
import Header from "../Header";
import Personal from "../settings/Personal";
import Appearance from "../settings/Appearance";
import About from "../settings/About";

function SettingsPage({ active, setActive }) {
  const [activePersonal, setActivePersonal] = useState(false);
  const [activeAppearance, setActiveAppearance] = useState(false);
  const [activeAbout, setActiveAbout] = useState(false);

  return (
    <div className="w-full h-full min-h-full box-border overflow-y-scroll rounded-3xl bg-backpanel p-8 relative 2xl:p-12 dark:bg-neutral-800">
      <Header active={active} setActive={setActive} />
      <div className="w-full rounded-xl bg-white p-4 mt-10 mb-5">
        <p>Personal</p>
      </div>
      <div className="p-5 bg-white rounded-2xl">
        <Personal></Personal>
      </div>
      <div className="w-full rounded-xl bg-white p-4 mt-10 mb-5">
        <p>Appearance</p>
      </div>
      <div className="p-5 bg-white rounded-2xl">
        <Appearance></Appearance>
      </div>
      <div className="w-full rounded-xl bg-white p-4 mt-10 mb-5">
        <p>About</p>
      </div>
      <div className="p-5 bg-white rounded-2xl" v>
        <About></About>
      </div>
    </div>
  );
}

export default SettingsPage;
