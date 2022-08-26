import React from "react";
import "../../../styles/progress.css";

function ProgressBar() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="rounded-full w-40 h-40 border-black" id="outer">
        <div
          className="rounded-full m-5 w-28 h-28 border-4 border-black"
          id="inner"
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
