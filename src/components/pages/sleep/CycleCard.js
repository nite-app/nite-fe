import React from "react";

function CycleCard({ cycles, hours, img }) {
  return (
    <div
      className="flex flex-col p-5 rounded-2xl bg-cover bg-no-repeat bg-gray-100 dark:bg-neutral-600"
      style={{ backgroundImage: `url(${img})` }}
    >
      <p className="dark:text-white">
        {cycles} full cycles, Corresponding to {hours} hours of sleep
      </p>
      <button
        className="mt-3 px-4 py-2 text-left w-fit rounded-xl bg-black dark:bg-neutral-50"
        onClick={() => {
          console.log(cycles);
        }}
      >
        <p className="text-white dark:text-black">Select</p>
      </button>
    </div>
  );
}

export default CycleCard;
