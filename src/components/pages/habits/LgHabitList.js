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
    <div className="p-5 bg-white rounded-3xl grid grid-rows-auto grid-cols-1 gap-y-3">
      <HabitInsert />
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
    </div>
  );
}

export default LgHabitList;
