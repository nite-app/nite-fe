import React, { useState } from "react";
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

function CollapsedSidebar({ settingsOpen, setSettingsOpen }) {
  return (
    <div className="relative h-full w-full mb-5 min-w-24 bg-backpanel box-border flex flex-row rounded-3xl p-0 items-center mr-5 xl:flex-col xl:w-24 xl:p-5 xl:mb-0">
      <div className="p-5 box-border items-center justify-center pr-0 md:pr-5">
        <div
          className="rounded-2xl bg-slate-400 p-4"
          onClick={() => {
            setSettingsOpen(true);
          }}
        >
          <p className="text-2xl font-semibold">AS</p>
        </div>
      </div>
      <div className="p-5 flex flex-row justify-center xl:flex-col">
        <TabsListUnstyled className="flex flex-row justify-center xl:flex-col">
          <TabUnstyled value={0} className="tab-item group md:p-5 xl:mb-2">
            <MdOutlineSpaceDashboard
              size={24}
              className="collapsedtab-icon group-hover:text-black"
            />
            <span className="tab-tooltip group-hover:scale-100 xl:display:block">
              Dashboard 📊
            </span>
          </TabUnstyled>
          <TabUnstyled value={1} className="tab-item group md:p-5 xl:mb-2">
            <BiSquareRounded
              size={20}
              className="collapsedtab-icon group-hover:text-black"
            />
            <span className="tab-tooltip group-hover:scale-100 xl:display:block">
              Home 🏡
            </span>
          </TabUnstyled>
          <TabUnstyled value={2} className="tab-item group md:p-5 xl:mb-2">
            <BiMoon
              size={24}
              className="collapsedtab-icon group-hover:text-black"
            />
            <span className="tab-tooltip group-hover:scale-100 xl:display:block">
              Sleep 🌒
            </span>
          </TabUnstyled>
          <TabUnstyled value={3} className="tab-item group md:p-5 xl:mb-12">
            <CgCheckR
              size={20}
              className="collapsedtab-icon group-hover:text-black"
            />
            <span className="tab-tooltip group-hover:scale-100 xl:display:block">
              Habits ✅
            </span>
          </TabUnstyled>
        </TabsListUnstyled>
      </div>
    </div>
  );
}

export default CollapsedSidebar;
