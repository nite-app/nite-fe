import React from "react";

function CycleCard({ cycles }, { hours }) {
  return (
    <div className="flex flex-col p-5 rounded-2xl bg-gray-100">
      <p>
        {cycles} full cycles, Corresponding to {hours} hours of sleep
      </p>
    </div>
  );
}

export default CycleCard;
