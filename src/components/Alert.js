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
        <div className="px-6 py-4 bg-neutral-900 rounded-[20px] flex justify-between items-center">
          <p className="font-semibold text-neutral-300 mr-12">{alertText}</p>
          <IoClose
            size={22}
            className="text-neutral-300 cursor-pointer"
            onClick={clear}
          />
        </div>
      </div>
    );
}

export default Alert;
