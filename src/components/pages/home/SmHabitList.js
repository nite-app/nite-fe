import React from "react";

function SmHabitList({ children }) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="box-border w-full p-5 flex flex-col grid-rows-auto grid-cols-2 gap-x-5 gap-y-3 bg-white rounded-3xl md:grid">
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

export default SmHabitList;
