import React, { useState, useEffect } from "react";
import { BsCheck } from "react-icons/bs";
import { MenuUnstyled, MenuItemUnstyled } from "@mui/base";

function SingleHabit({ text, icon, checked, id }) {
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
  }, [isChecked]);

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (isOpen) {
      setAnchorEl(null);
    } else {
      setAnchorEl(e.currentTarget);
    }
  };

  const close = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-full flex items-center relative group">
      <div className="relative flex justify-center items-center">
        <input
          type="checkbox"
          className={checkedCheckbox}
          onClick={() => {
            toggleItems();
          }}
        />
        {isChecked ? (
          <BsCheck
            size={20}
            className="text-white absolute top-0 left-0 cursor-pointer"
            onClick={() => {
              toggleItems();
            }}
          />
        ) : (
          <></>
        )}
      </div>
      <p
        className={checkedText}
        onClick={() => {
          toggleItems();
        }}
      >
        {text}
      </p>
      <p className="absolute right-0 w-6">{icon}</p>
      <img
        src={require("../img/choiceMenuHabit.png")}
        alt="choice"
        className="absolute -right-1 w-8 hidden cursor-pointer group-hover:block"
        onClick={handleButtonClick}
      />
      <MenuUnstyled
        open={isOpen}
        onClose={close}
        anchorEl={anchorEl}
        className="z-20 rounded-xl p-2 bg-white"
      >
        <MenuItemUnstyled className="mb-2 box-border bg-gray-100 p-2 rounded-lg w-28 cursor-pointer">
          ✍️ Edit
        </MenuItemUnstyled>
        <MenuItemUnstyled
          className="box-border bg-red-100 p-2 rounded-lg w-28 cursor-pointer"
          onClick={() => {}}
        >
          <p className="text-red-600">🗑️ Delete</p>
        </MenuItemUnstyled>
      </MenuUnstyled>
    </div>
  );
}

export default SingleHabit;
