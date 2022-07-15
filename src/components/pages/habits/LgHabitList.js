import React from "react";
import HabitInsert from "./HabitInsert";

function LgHabitList({ children }) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="p-5 bg-white rounded-3xl grid grid-rows-auto grid-cols-1 gap-y-3">
      <HabitInsert />
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
