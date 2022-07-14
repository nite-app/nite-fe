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
      setCheckedText("font-medium line-through cursor-pointer");
    } else {
      setCheckedCheckbox(
        "mr-4 bg-lighttxt w-5 h-5 align-middle rounded-md appearance-none outline-none cursor-pointer"
      );
      setCheckedText("font-medium cursor-pointer");
    }
  }, [isChecked]);

  //   MENU
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
  //   MENU

  return (
    <div className="w-full flex items-center relative box-border rounded-2xl p-5 py-2 bg-gray-200 h-14">
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
      <div className="w-full">
        <p
          className={checkedText}
          onClick={() => {
            toggleItems();
          }}
        >
          {text}
        </p>
        <div className="group">
          <div className="absolute h-full flex items-center right-5 top-0">
            <p className="text-xl">{icon}</p>
          </div>
          <img
            src={require("../../../img/choiceMenuHabit.png")}
            alt="choice"
            className="absolute right-2 top-2 w-10 hidden cursor-pointer group-hover:block group-hover:duration-300"
            onClick={handleButtonClick}
          />
        </div>

        <MenuUnstyled
          open={isOpen}
          onClose={close}
          anchorEl={anchorEl}
          className="z-20 rounded-xl p-2 bg-white"
        >
          <MenuItemUnstyled
            className="mb-2 box-border bg-gray-100 p-2 rounded-lg w-28 cursor-pointer focus:outline-none"
            onClick={() => {
              close();
            }}
          >
            ✍️ Edit
          </MenuItemUnstyled>
          <MenuItemUnstyled
            className="box-border bg-red-100 p-2 rounded-lg w-28 cursor-pointer focus:outline-none"
            onClick={() => {
              close();
            }}
          >
            <p className="text-red-600">🗑️ Delete</p>
          </MenuItemUnstyled>
        </MenuUnstyled>
      </div>
    </div>
  );
}

export default SingleHabit;
