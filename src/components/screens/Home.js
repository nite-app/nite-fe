import React from "react";
import { BsReverseLayoutSidebarInsetReverse } from "react-icons/bs";

import HabitList from "../HabitList";
import SingleHabit from "../SingleHabit";

function Home({ active, setActive }) {
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
      <div className="flex flex-col">
        <p className="font-semibold text-xl mt-8 mb-5 2xl:text-2xl">
          Current habits
        </p>
        <div className="flex">
          <HabitList>
            <SingleHabit text={"Item 1"}></SingleHabit>
            <SingleHabit text={"item 2"}></SingleHabit>
          </HabitList>
        </div>
      </div>
    </div>
  );
}

export default Home;
