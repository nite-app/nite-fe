import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Axios from "axios";

function HabitInsert() {
  const [habit, setHabit] = useState("");
  const [id, setId] = useState(0);

  const addHabit = () => {
    Axios.post("http://localhost:3001/api/addhabit", {
      id: id,
      habit: habit,
    }).then(() => {
      alert("added habit to db");
    });
  };

  return (
    <div className="w-full flex items-center relative box-border rounded-2xl p-5 py-2 bg-gray-400 h-14 group">
      <input
        type="text"
        placeholder="Write a new task..."
        className="peer bg-gray-400 w-full font-medium outline-none focus:outline-none placeholder:text-gray-700"
        onChange={(e) => {
          setHabit(e.target.value);
        }}
      ></input>
      <div className="absolute hidden right-2 top-0 h-full items-center peer-focus:flex group-hover:flex">
        <button
          type="submit"
          className="flex bg-gray-100 p-2 rounded-xl w-10 h-10 justify-center items-center"
          onClick={addHabit}
        >
          <FiPlus />
        </button>
      </div>
    </div>
  );
}

export default HabitInsert;
