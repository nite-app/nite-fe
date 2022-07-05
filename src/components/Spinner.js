import React from "react";
import { HashLoader } from "react-spinners";

function Spinner() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HashLoader />
    </div>
  );
}

export default Spinner;
