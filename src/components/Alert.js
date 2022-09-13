import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import AlertContext from "../contexts/AlertContext";

function Alert() {
  const { alertText, clearAlert } = useContext(AlertContext);

  function clear() {
    clearAlert();
  }

  if (alertText)
    return (
      <div className="w-full fixed bottom-20 right-0 flex justify-center items-center z-[100]">
        <div className="px-8 py-5 bg-neutral-900 rounded-3xl flex justify-between">
          <p className="font-semibold text-neutral-300 text-lg mr-40">
            {alertText}
          </p>
          <IoClose size={26} className="text-neutral-300" onClick={clear} />
        </div>
      </div>
    );
}

export default Alert;
