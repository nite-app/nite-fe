import React, { useState, useEffect, useContext } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BiSquareRounded } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";
import { CgCheckR } from "react-icons/cg";
import { HiOutlineCog } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import {
  TabsUnstyled,
  TabsListUnstyled,
  TabPanelUnstyled,
  TabUnstyled,
} from "@mui/base";
import AlertContext from "../../contexts/AlertContext";

function Sidebar({ settingsOpen, setSettingsOpen }) {
  const { alertText, setAlert } = useContext(AlertContext);

  return (
    <div
      className="hidden h-full w-full bg-backpanel box-border flex-col rounded-3xl p-5 mr-5
      xl:flex xl:w-3/12 dark:bg-neutral-800"
    >
      <div
        className="rounded-2xl bg-gray-200 pb-5 dark:bg-neutral-700"
        id="profile-container"
      >
        <div className="p-5 flex box-border items-center">
          <div
            className="rounded-2xl p-4 mr-5 bg-cover"
            id="profile-pic"
            onClick={() => {
              // setSettingsOpen(true);
            }}
          >
            <p className="text-2xl font-semibold cursor-default">AS</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold dark:text-white">
              Anna Shumate
            </h3>
          </div>
        </div>
        <div className="flex px-5 box-border" id="profile-menu">
          <button
            className="flex items-center rounded-xl py-1 px-3 !bg-gray-300 group dark:!bg-neutral-500"
            onClick={() => {
              setSettingsOpen(true);
            }}
          >
            <HiOutlineCog
              className="mr-2 text-gray-500 dark:text-neutral-300"
              id="settings-icon"
            />
            <p
              className="text-gray-500 dark:text-neutral-300"
              id="settings-text"
            >
              Settings
            </p>
          </button>
          <button
            className="flex items-center rounded-xl py-1 px-3 !bg-gray-300 text-red-400 ml-2 dark:!bg-neutral-500"
            onClick={() => {}}
          >
            <FiLogOut className="mr-2 text-red-400" />
            Log out
          </button>
        </div>
      </div>

      <div className="py-5 flex flex-col justify-center ">
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
