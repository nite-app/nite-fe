import React, { useState, useEffect } from "react";
import Header from "../Header";
import LgHabitList from "../pages/habits/LgHabitList";
import SingleHabit from "../pages/habits/SingleHabit";

import { habits } from "../../data/Habits";

function Habits({ active, setActive }) {
  return (
    <div className="w-full h-full min-h-full box-border overflow-y-scroll rounded-3xl bg-backpanel p-8 relative 2xl:p-12">
      <Header active={active} setActive={setActive} />
      <div className="flex flex-col w-full xl:w-1/2">
        <p className="font-semibold text-xl mt-8 mb-5 2xl:text-2xl">
          Current habits
        </p>
        <LgHabitList>
          {habits.map((habit) => {
            return (
              <SingleHabit
                key={habit.id}
                id={habit.id}
                text={habit.text}
                icon={habit.icon}
                checked={habit.checked}
              />
            );
          })}
        </LgHabitList>
      </div>
    </div>
  );
}

export default Habits;
