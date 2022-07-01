import React from "react";

function HabitList({ children }) {
  return (
    <div className="box-border w-5/12 p-5 grid grid-rows-4 grid-cols-2 gap-x-5 gap-y-3 bg-white rounded-3xl">
      <div className="flex box-border rounded-2xl p-5 py-2 items-center bg-gray-200 w-full h-14">
        {children}
      </div>
      <div className="flex box-border rounded-2xl p-5 py-2 items-center bg-gray-200 w-full h-14">
        {children}
      </div>
      <div className="flex box-border rounded-2xl p-5 py-2 items-center bg-gray-200 w-full h-14">
        {children}
      </div>
      <div className="flex box-border rounded-2xl p-5 py-2 items-center bg-gray-200 w-full h-14">
        {children}
      </div>
      <div className="flex box-border rounded-2xl p-5 py-2 items-center bg-gray-200 w-full h-14">
        {children}
      </div>
      <div className="flex box-border rounded-2xl p-5 py-2 items-center bg-gray-200 w-full h-14">
        {children}
      </div>
      <div className="flex box-border rounded-2xl p-5 py-2 items-center bg-gray-200 w-full h-14">
        {children}
      </div>
      <div className="flex box-border rounded-2xl p-5 py-2 items-center bg-gray-200 w-full h-14">
        {children}
      </div>
    </div>
  );
}

export default HabitList;
