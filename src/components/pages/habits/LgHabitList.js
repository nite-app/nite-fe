import React from "react";

function LgHabitList({ children }) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="p-5 bg-white rounded-3xl grid grid-rows-auto grid-cols-1 gap-y-3">
      <div className="w-full flex items-center relative box-border rounded-2xl p-5 py-2 bg-gray-400 h-14 group">
        <input
          type="text"
          placeholder="Write a new task..."
          className="bg-gray-400 w-full font-medium outline-none focus:outline-none placeholder:text-gray-700"
        ></input>
        <img
          src={require("../../../img/choiceMenuHabit.png")}
          alt="choice"
          className="absolute right-2 top-2 w-10 hidden cursor-pointer group-hover:block"
          // onClick={handleButtonClick}
        />
      </div>
      {/* random icon on insert, edit with dots after add */}
      {childrenArray[0]}
      {childrenArray[1]}
      {childrenArray[2]}
      {childrenArray[3]}
      {childrenArray[4]}
      {childrenArray[5]}
      {childrenArray[6]}
      {childrenArray[7]}
    </div>
  );
}

export default LgHabitList;
