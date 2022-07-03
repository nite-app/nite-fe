import React, { useState, useEffect } from "react";

function SingleHabit({ text, icon, checked }) {
  const [checkedCheckbox, setCheckedCheckbox] = useState(
    "mr-4 bg-lighttxt w-5 h-5 align-middle rounded-md appearance-none outline-none cursor-pointer"
  );
  const [checkedText, setCheckedText] = useState("font-medium");
  const [isChecked, setIsChecked] = useState(checked);

  const toggleItems = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (isChecked === true) {
      setCheckedCheckbox(
        "mr-4 bg-black w-5 h-5 align-middle rounded-md appearance-none outline-none cursor-pointer"
      );
      setCheckedText("font-medium line-through");
    } else {
      setCheckedCheckbox(
        "mr-4 bg-lighttxt w-5 h-5 align-middle rounded-md appearance-none outline-none cursor-pointer"
      );
      setCheckedText("font-medium");
    }

    return () => {};
  }, [isChecked]);

  return (
    <div className="w-full flex items-center relative">
      <input
        type="checkbox"
        className={checkedCheckbox}
        onClick={() => {
          toggleItems();
        }}
      />
      <p className={checkedText}>{text}</p>
      <p className="absolute right-0 w-6">{icon}</p>
    </div>
  );
}

export default SingleHabit;
