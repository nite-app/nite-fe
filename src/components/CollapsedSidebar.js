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
    <div className="relative h-full w-full mb-5 min-w-24 bg-backpanel box-border flex flex-row rounded-3xl p-0 items-center mr-5 xl:flex-col xl:w-24 xl:p-5 xl:mb-0">
      <div className="p-5 box-border items-center justify-center hidden md:flex">
        <div className="rounded-full bg-slate-400 p-4">
          <p className="text-2xl font-semibold">AS</p>
        </div>
      </div>
      <div className="p-5 flex flex-row justify-center xl:flex-col">
        <TabsListUnstyled className="flex flex-row justify-center xl:flex-col">
          <TabUnstyled value={0} className="tab-item group md:p-5 xl:mb-2">
            <MdSpaceDashboard
              size={32}
              className="collapsedtab-icon group-hover:text-black"
            />
            <span className="tab-tooltip group-hover:scale-100 xl:display:block">
              Dashboard 📊
            </span>
          </TabUnstyled>
          <TabUnstyled value={1} className="tab-item group md:p-5 xl:mb-2">
            <FaHome
              size={32}
              className="collapsedtab-icon group-hover:text-black"
            />
            <span className="tab-tooltip group-hover:scale-100 xl:display:block">Home 🏡</span>
          </TabUnstyled>
          <TabUnstyled value={2} className="tab-item group md:p-5 xl:mb-2">
            <RiMoonFill
              size={32}
              className="collapsedtab-icon group-hover:text-black"
            />
            <span className="tab-tooltip group-hover:scale-100 xl:display:block">Sleep 🌒</span>
          </TabUnstyled>
          <TabUnstyled value={3} className="tab-item group md:p-5 xl:mb-2">
            <CgCheckR
              size={32}
              className="collapsedtab-icon group-hover:text-black"
            />
            <span className="tab-tooltip group-hover:scale-100 xl:display:block">Habits ✅</span>
          </TabUnstyled>
        </TabsListUnstyled>
        <div className="group relative flex p-3 mb-0 rounded-2xl bottom-0 box-border transition-all duration-300 ease-linear hover:bg-backlight md:p-5 xl:absolute xl:mb-5">
          <IoMdSettings
            size={32}
            className="collapsedtab-icon group-hover:text-black"
          />
          <span className="tab-tooltip group-hover:scale-100 xl:display:block">Settings ⚙️</span>
        </div>
      </div>
    </div>
  );
}

export default CollapsedSidebar;
