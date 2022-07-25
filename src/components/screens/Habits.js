import React, { useState, useEffect } from "react";
import Header from "../Header";
import LgHabitList from "../pages/habits/LgHabitList";

function Habits({ active, setActive }) {
  return (
    <div className="w-full h-full min-h-full box-border overflow-y-scroll rounded-3xl bg-backpanel p-8 relative 2xl:p-12 dark:bg-neutral-800">
      <Header active={active} setActive={setActive} />
      <div className="flex flex-col w-full xl:w-1/2">
        <p className="font-semibold text-xl mt-8 mb-5 2xl:text-2xl dark:text-white">
          Current habits
        </p>
        <LgHabitList />
      </div>
    </div>
  );
}

export default Habits;
