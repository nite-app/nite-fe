import React from "react";
import "../../../styles/progress.css";

function ProgressBar({ progress, text }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="rounded-full w-40 h-40" id="outer">
        <div
          className="rounded-full m-6 w-28 h-28 flex justify-center items-center"
          id="inner"
        >
          <p className="font-bold text-xl dark:text-white">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
