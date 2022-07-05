import React, { useEffect, useState, lazy, Suspense } from "react";
import { BsReverseLayoutSidebarInsetReverse } from "react-icons/bs";
import { habits } from "../../data/Habits";

import Spinner from "../Spinner";
import HabitList from "../HabitList";
import SingleHabit from "../SingleHabit";

function Home({ active, setActive }) {
  const Quote = React.lazy(() => import("../pages/home/Quote"));

  return (
    <div className="w-full h-full min-h-full box-border overflow-y-scroll rounded-3xl bg-backpanel p-8 relative 2xl:p-12">
      <div className="flex items-center">
        <BsReverseLayoutSidebarInsetReverse
          size={28}
          className="mr-5 cursor-pointer"
          onClick={() => {
            setActive(!active);
          }}
        />
        <p className="text-3xl font-semibold 2xl:text-5xl">Home</p>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:mr-5">
          <p className="font-semibold text-xl mt-8 mb-5 2xl:text-2xl">
            Today at a glance
          </p>
          <Suspense fallback={<Spinner />}>
            <Quote />
          </Suspense>
        </div>
        <div className="lg:w-1/2">
          <p className="font-semibold text-xl mt-8 mb-5 2xl:text-2xl">
            Current habits
          </p>
          <div className="flex w-full">
            <HabitList>
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
            </HabitList>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
