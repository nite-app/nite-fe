import React from "react";
import "../../../styles/progress.css";

function ProgressBar({ text, progress }) {
  const center = 80,
    radius = 67.5,
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * ((100 - progress) / 100);

  return (
    <div className="my-2 w-full h-full flex flex-col justify-center items-center">
      <div className="relative rounded-full w-40 h-40" id="outer">
        <div
          className="rounded-full m-6 w-28 h-28 flex justify-center items-center"
          id="inner"
        >
          <p className="font-bold text-xl dark:text-white">{text}</p>
        </div>
        <svg width="160px" height="160px" className="svg">
          <defs>
            <linearGradient id="gradient">
              <stop offset={"0%"} stopColor="#1461FF" />
              <stop offset={"100%"} stopColor="#D320C1" />
            </linearGradient>
          </defs>
          <circle
            className="circle"
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            strokeLinecap={"round"}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
          />
        </svg>
      </div>
    </div>
  );
}

export default ProgressBar;
