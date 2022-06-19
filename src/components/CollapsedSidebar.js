import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { RiMoonFill } from "react-icons/ri";
import { CgCheckR } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import {
  TabsUnstyled,
  TabsListUnstyled,
  TabPanelUnstyled,
  TabUnstyled,
} from "@mui/base";

function CollapsedSidebar() {
  return (
    <div className="relative h-full w-24 min-w-24 bg-backpanel box-border flex flex-col rounded-3xl p-5 items-center mr-5">
      <div className="p-5 flex box-border items-center justify-center">
        <div className="rounded-full bg-slate-400 p-4">
          <p className="text-2xl font-semibold">AS</p>
        </div>
      </div>
      <div className="p-5 flex flex-col justify-center ">
        <TabsListUnstyled className="flex flex-col justify-center">
          <TabUnstyled value={0} className="tab-item group">
            <MdSpaceDashboard
              size={32}
              className="collapsedtab-icon group-hover:text-black"
            />
            <span className="tab-tooltip group-hover:scale-100">
              Dashboard 📊
            </span>
          </TabUnstyled>
          <TabUnstyled value={1} className="tab-item group">
            <FaHome
              size={32}
              className="collapsedtab-icon group-hover:text-black"
            />
            <span className="tab-tooltip group-hover:scale-100">Home 🏡</span>
          </TabUnstyled>
          <TabUnstyled value={2} className="tab-item group">
            <RiMoonFill
              size={32}
              className="collapsedtab-icon group-hover:text-black"
            />
            <span className="tab-tooltip group-hover:scale-100">Sleep 🌒</span>
          </TabUnstyled>
          <TabUnstyled value={3} className="tab-item group">
            <CgCheckR
              size={32}
              className="collapsedtab-icon group-hover:text-black"
            />
            <span className="tab-tooltip group-hover:scale-100">Habits ✅</span>
          </TabUnstyled>
        </TabsListUnstyled>
        <div className="group absolute flex p-5 mb-5 rounded-2xl bottom-0 box-border transition-all duration-300 ease-linear hover:bg-backlight">
          <IoMdSettings
            size={32}
            className="collapsedtab-icon group-hover:text-black"
          />
          <span className="tab-tooltip group-hover:scale-100">Settings ⚙️</span>
        </div>
      </div>
    </div>
  );
}

export default CollapsedSidebar;
