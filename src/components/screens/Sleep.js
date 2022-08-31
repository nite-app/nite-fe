import React from "react";
import Header from "../Header";
import SleepQuality from "../pages/sleep/SleepQuality";
import Cycles from "../pages/sleep/Cycles";

function Sleep({ active, setActive }) {
  return (
    <div className="w-full h-full min-h-full box-border overflow-y-scroll rounded-3xl bg-backpanel p-8 relative 2xl:p-12 dark:bg-neutral-800">
      <Header active={active} setActive={setActive} />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 lg:mr-5">
          <p className="font-semibold text-xl mt-8 mb-5 2xl:text-2xl dark:text-white">
            Sleep cycles
          </p>
          <Cycles />
        </div>
        <div className="w-full lg:w-1/2 lg:mr-5">
          <p className="font-semibold text-xl mt-8 mb-5 2xl:text-2xl dark:text-white">
            About tonight
          </p>
          <SleepQuality />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Sleep;
