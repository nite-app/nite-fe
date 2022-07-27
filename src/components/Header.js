import React, { useState, useEffect } from "react";
import { BsReverseLayoutSidebarInsetReverse } from "react-icons/bs";
import { BsLayoutSidebarInset } from "react-icons/bs";
import Tooltip from "./Tooltip";

function Header({ active, setActive }) {
  const [partOfTheDay, setPartOfTheDay] = useState();
  useEffect(() => {
    setPartOfTheDay(new Date().getHours() > 12 ? "Afternoon" : "Morning");
  }, []);

  return (
    <div className="flex items-center">
      <Tooltip title={"Toggle sidebar"}>
        <div>
          {active ? (
            <>
              <BsReverseLayoutSidebarInsetReverse
                size={28}
                className="mr-5 cursor-pointer dark:text-white"
                onClick={() => {
                  setActive(!active);
                }}
              />
            </>
          ) : (
            <>
              <BsLayoutSidebarInset
                size={28}
                className="mr-5 cursor-pointer dark:text-white"
                onClick={() => {
                  setActive(!active);
                }}
              />
            </>
          )}
        </div>
      </Tooltip>
      <p className="text-3xl font-semibold 2xl:text-5xl dark:text-white">
        Good {partOfTheDay}, Anna
      </p>
    </div>
  );
}

export default Header;
