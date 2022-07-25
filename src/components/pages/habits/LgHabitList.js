import React, { useState, useEffect } from "react";
import HabitInsert from "./HabitInsert";
import SingleHabit from "./SingleHabit";
import axios from "axios";

function LgHabitList({ children }) {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/gethabits").then((response) => {
      setHabits(response.data);
    });
  }, []);

  return (
    <div className="p-5 bg-white rounded-3xl grid grid-rows-auto grid-cols-1 gap-y-3 dark:bg-neutral-700">
      <HabitInsert />
      <>
        {habits[0] ? (
          <>
            {habits.map((habit) => {
              return (
                <SingleHabit
                  key={habit.id}
                  id={habit.id}
                  text={habit.habitname}
                  icon={habit.habiticon}
                  checked={habit.habitstatus}
                />
              );
            })}
          </>
        ) : (
          <p className="p-3 rounded-xl bg-red-100">
            Damn! You don't have any habit set, create new ones up here!
          </p>
        )}
      </>
    </div>
  );
}

export default LgHabitList;
