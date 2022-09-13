import React, { useContext, useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import AlertContext from "../contexts/AlertContext";

function Alert() {
  const { alertText, clearAlert, alertType } = useContext(AlertContext);
  const [textColor, setTextColor] = useState("text-neutral-300");

  useEffect(() => {
    if (alertType === "error") {
      setTextColor("text-red-500");
    } else if (alertType === "standard") {
      setTextColor("text-neutral-300");
    }
  }, [alertType]);

  function clear() {
    clearAlert();
  }

  if (alertText)
    return (
      <div className="w-full fixed bottom-20 right-0 flex justify-center items-center z-[100]">
        <div className="px-6 py-4 bg-neutral-900 rounded-[20px] flex justify-between items-center">
          <p className={`font-semibold mr-12 ${textColor}`}>{alertText}</p>
          <IoClose
            size={22}
            className="cursor-pointer text-neutral-300 hover:text-neutral-100"
            onClick={clear}
          />
        </div>
      </div>
    );
}

export default Alert;
