import React from "react";
import { IoClose } from "react-icons/io5";

function Alert() {
  return (
    <div className="w-full fixed bottom-20 flex justify-center items-center z-[100]">
      <div className="px-8 py-5 bg-neutral-900 rounded-3xl flex justify-between">
        <p className="font-semibold text-neutral-300 text-lg mr-40">
          Error to get from api
        </p>
        <IoClose size={26} className="text-neutral-300" />
      </div>
    </div>
  );
}

export default Alert;
