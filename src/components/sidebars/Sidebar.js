import React, { useState, useEffect } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BiSquareRounded } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";
import { CgCheckR } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import {
  TabsUnstyled,
  TabsListUnstyled,
  TabPanelUnstyled,
  TabUnstyled,
} from "@mui/base";

function Sidebar({ settingsOpen, setSettingsOpen }) {
  return (
    <div
      className="hidden h-full w-full bg-backpanel box-border flex-col rounded-3xl p-5 mr-5
      xl:flex xl:w-3/12 dark:bg-neutral-800"
    >
      <div className="p-5 flex box-border items-center">
        <div
          className="rounded-2xl bg-slate-400 p-4 mr-5 cursor-pointer"
          onClick={() => {
            setSettingsOpen(true);
          }}
        >
          <p className="text-2xl font-semibold">AS</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold dark:text-white">
            Anna Shumate
          </h3>
        </div>
      </div>

      <div className="p-5 flex flex-col justify-center ">
        <TabsListUnstyled className="flex flex-col justify-center">
          <TabUnstyled value={0} className="tab-item group p-5">
            <MdOutlineSpaceDashboard
              size={24}
              className="tab-icon group-hover:text-hovertxt dark:group-hover:text-neutral-100"
            />
            <p className="tab-text group-hover:text-hovertxt dark:group-hover:text-neutral-100">
              Dashboard
            </p>
          </TabUnstyled>
          <TabUnstyled value={1} className="tab-item group p-5">
            <BiSquareRounded
              size={20}
              className="tab-icon group-hover:text-hovertxt dark:group-hover:text-neutral-100"
            />
            <p className="tab-text group-hover:text-hovertxt dark:group-hover:text-neutral-100">
              Home
            </p>
          </TabUnstyled>
          <TabUnstyled value={2} className="tab-item group p-5">
            <BiMoon
              size={24}
              className="tab-icon group-hover:text-hovertxt dark:group-hover:text-neutral-100"
            />
            <p className="tab-text group-hover:text-hovertxt dark:group-hover:text-neutral-100">
              Sleep
            </p>
          </TabUnstyled>
          <TabUnstyled value={3} className="tab-item group p-5">
            <CgCheckR
              size={20}
              className="tab-icon group-hover:text-hovertxt dark:group-hover:text-neutral-100"
            />
            <p className="tab-text group-hover:text-hovertxt dark:group-hover:text-neutral-100">
              Habits
            </p>
          </TabUnstyled>
        </TabsListUnstyled>
      </div>
    </div>
  );
}

export default Sidebar;
