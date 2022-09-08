import React, { useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BiSquareRounded } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";
import { CgCheckR } from "react-icons/cg";
import { HiOutlineCog } from "react-icons/hi";
import {
  TabsUnstyled,
  TabsListUnstyled,
  TabPanelUnstyled,
  TabUnstyled,
} from "@mui/base";
import Tooltip from "../Tooltip";

function CollapsedSidebar({ settingsOpen, setSettingsOpen }) {
  return (
    <div className="relative h-full w-full mb-5 min-w-24 bg-backpanel box-border flex flex-row rounded-3xl p-0 items-center mr-5 xl:flex-col xl:w-24 xl:p-5 xl:mb-0 dark:bg-neutral-800">
      <div className="p-5 box-border items-center justify-center pr-0 md:pr-5">
        <Tooltip title={"Settings"} placement={"right"}>
          <div
            className="rounded-2xl bg-slate-400 p-3 cursor-pointer md:p-4"
            onClick={() => {
              setSettingsOpen(true);
            }}
          >
            <p className="text-2xl font-semibold">AS</p>
          </div>
        </Tooltip>
      </div>
      <div className="p-5 flex flex-row justify-center xl:flex-col">
        <TabsListUnstyled className="flex flex-row justify-center xl:flex-col">
          <Tooltip title={"Dashboard"} placement={"right"}>
            <TabUnstyled
              value={0}
              className="tab-item group p-4 md:p-5 xl:mb-2"
            >
              <MdOutlineSpaceDashboard
                size={24}
                className="collapsedtab-icon group-hover:text-black dark:group-hover:text-neutral-100"
              />
              <span className="tab-tooltip group-hover:scale-100 xl:display:block">
                Dashboard 📊
              </span>
            </TabUnstyled>
          </Tooltip>
          <Tooltip title={"Home"} placement={"right"}>
            <TabUnstyled
              value={1}
              className="tab-item group p-4 md:p-5 xl:mb-2"
            >
              <BiSquareRounded
                size={20}
                className="collapsedtab-icon group-hover:text-black dark:group-hover:text-neutral-100"
              />
              <span className="tab-tooltip group-hover:scale-100 xl:display:block">
                Home 🏡
              </span>
            </TabUnstyled>
          </Tooltip>
          <Tooltip title={"Sleep"} placement={"right"}>
            <TabUnstyled
              value={2}
              className="tab-item group p-4 md:p-5 xl:mb-2"
            >
              <BiMoon
                size={24}
                className="collapsedtab-icon group-hover:text-black dark:group-hover:text-neutral-100"
              />
              <span className="tab-tooltip group-hover:scale-100 xl:display:block">
                Sleep 🌒
              </span>
            </TabUnstyled>
          </Tooltip>
          <Tooltip title={"Habits"} placement={"right"}>
            <TabUnstyled
              value={3}
              className="tab-item group p-4 md:p-5 xl:mb-2"
            >
              <CgCheckR
                size={20}
                className="collapsedtab-icon group-hover:text-black dark:group-hover:text-neutral-100"
              />
              <span className="tab-tooltip group-hover:scale-100 xl:display:block">
                Habits ✅
              </span>
            </TabUnstyled>
          </Tooltip>
        </TabsListUnstyled>
      </div>
    </div>
  );
}

export default CollapsedSidebar;
