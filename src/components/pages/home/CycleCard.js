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
    </div>
  );
}

export default CycleCard;
