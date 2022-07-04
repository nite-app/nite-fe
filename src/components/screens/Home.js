import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsReverseLayoutSidebarInsetReverse } from "react-icons/bs";
import { quotesEmojis } from "../../data/QuotesEmojis";
import { habits } from "../../data/Habits";

import HabitList from "../HabitList";
import SingleHabit from "../SingleHabit";

function Home({ active, setActive }) {
  const [currentQuote, setCurrentQuote] = useState({});

  const getQuote = () => {
    axios.get("https://api.quotable.io/random").then((response) => {
      setCurrentQuote({
        content: response.data.content,
        author: response.data.author,
        icon: quotesEmojis[Math.floor(Math.random() * quotesEmojis.length)],
      });
    });
  };

  // provvisorio vi prego
  useEffect(() => {
    getQuote();
  }, []);

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
          <div className="flex flex-col rounded-3xl bg-white w-full p-5">
            <p className="font-medium ">{currentQuote.content}</p>
            <p className="text-gray-500 text-sm mt-3">
              {currentQuote.icon} - {currentQuote.author}
            </p>
          </div>
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
