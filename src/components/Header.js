import React, { useState, useEffect } from "react";
import { BsReverseLayoutSidebarInsetReverse } from "react-icons/bs";
import Tooltip from "./Tooltip";

function Header({ active, setActive }) {
  const [partOfTheDay, setPartOfTheDay] = useState();
  useEffect(() => {
    setPartOfTheDay(new Date().getHours() > 12 ? "Afternoon" : "Morning");
  }, []);

  return (
    <div className="flex items-center">
      <Tooltip title={"Toggle sidebar"}>
        <BsReverseLayoutSidebarInsetReverse
          size={28}
          className="mr-5 cursor-pointer"
          onClick={() => {
            setActive(!active);
          }}
        />
      </Tooltip>
      <p className="text-3xl font-semibold 2xl:text-5xl">
        Good {partOfTheDay}, Anna
      </p>
    </div>
  );
}

export default Header;
