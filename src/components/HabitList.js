import React from "react";

function HabitList({ children }) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="box-border w-full p-5 flex flex-col grid-rows-4 grid-cols-2 gap-x-5 gap-y-3 bg-white rounded-3xl lg:w-6/12 xl:w-5/12 md:grid">
      <div className="flex box-border rounded-2xl p-5 py-2 items-center bg-gray-200 w-full h-14">
        {childrenArray[0]}
      </div>
      <div className="flex box-border rounded-2xl p-5 py-2 items-center bg-gray-200 w-full h-14">
        {childrenArray[1]}
      </div>
      <div className="flex box-border rounded-2xl p-5 py-2 items-center bg-gray-200 w-full h-14">
        {childrenArray[2]}
      </div>
      <div className="flex box-border rounded-2xl p-5 py-2 items-center bg-gray-200 w-full h-14">
        {childrenArray[3]}
      </div>
      <div className="flex box-border rounded-2xl p-5 py-2 items-center bg-gray-200 w-full h-14">
        {childrenArray[4]}
      </div>
      <div className="flex box-border rounded-2xl p-5 py-2 items-center bg-gray-200 w-full h-14">
        {childrenArray[5]}
      </div>
      <div className="flex box-border rounded-2xl p-5 py-2 items-center bg-gray-200 w-full h-14">
        {childrenArray[6]}
      </div>
      <div className="flex box-border rounded-2xl p-5 py-2 items-center bg-gray-200 w-full h-14">
        {childrenArray[7]}
      </div>
    </div>
  );
}

export default HabitList;
