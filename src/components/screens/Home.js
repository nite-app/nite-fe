import React, { useEffect, useState, lazy, Suspense } from "react";
import Header from "../Header";
import { habits } from "../../data/Habits";

import Spinner from "../Spinner";
import SmHabitList from "../pages/home/SmHabitList";
import SingleHabit from "../pages/habits/SingleHabit";
import Cycles from "../pages/home/Cycles";

function Home({ active, setActive }) {
  const Quote = React.lazy(() => import("../pages/home/Quote"));

  return (
    <div className="w-full h-full min-h-full box-border overflow-y-scroll rounded-3xl bg-backpanel p-8 relative 2xl:p-12">
      <Header active={active} setActive={setActive} />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:mr-8">
          <div className="mb-10">
            <p className="font-semibold text-xl mt-8 mb-5 2xl:text-2xl">
              Today at a glance
            </p>
            <Suspense fallback={<Spinner />}>
              <Quote />
            </Suspense>
          </div>
          <div>
            <p className="font-semibold text-xl mt-8 mb-5 2xl:text-2xl">
              Current habits
            </p>
            <div className="flex w-full">
              <SmHabitList>
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
              </SmHabitList>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="mb-10">
            <p className="font-semibold text-xl mt-10 mb-5 2xl:text-2xl lg:mt-8">
              Sleep cycles
            </p>
            <Cycles />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
