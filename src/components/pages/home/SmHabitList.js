import React, { useState, useEffect } from "react";
import SingleHabit from "../habits/SingleHabit";
import axios from "axios";

function SmHabitList({ children }) {
  // const childrenArray = React.Children.toArray(children);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/gethabits").then((response) => {
      setHabits(response.data);
    });
  }, []);

  return (
    <div className="box-border w-full p-5 flex flex-col grid-rows-auto grid-cols-2 gap-x-5 gap-y-3 bg-white rounded-3xl md:grid">
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

export default SmHabitList;
