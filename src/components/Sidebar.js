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

function Sidebar() {
  return (
    <div
      className=" hidden h-full w-full bg-backpanel box-border flex-col rounded-3xl p-5 mr-5 z-50
      md:flex w-3/12"
    >
      <div className="p-5 flex box-border items-center">
        <div className="rounded-full bg-slate-400 p-4 mr-5">
          <p className="text-2xl font-semibold">AS</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold">Anna Shumate</h3>
        </div>
      </div>
      <div className="p-5 flex flex-col justify-center ">
        <TabsListUnstyled className="flex flex-col justify-center">
          <TabUnstyled value={0} className="tab-item group">
            <MdSpaceDashboard
              size={32}
              className="tab-icon group-hover:text-black"
            />
            <p className="tab-text group-hover:text-black">Dashboard</p>
          </TabUnstyled>
          <TabUnstyled value={1} className="tab-item group">
            <FaHome size={32} className="tab-icon group-hover:text-black" />
            <p className="tab-text group-hover:text-black">Home</p>
          </TabUnstyled>
          <TabUnstyled value={2} className="tab-item group">
            <RiMoonFill size={32} className="tab-icon group-hover:text-black" />
            <p className="tab-text group-hover:text-black">Sleep</p>
          </TabUnstyled>
          <TabUnstyled value={3} className="tab-item group">
            <CgCheckR size={32} className="tab-icon group-hover:text-black" />
            <p className="tab-text group-hover:text-black">Habits</p>
          </TabUnstyled>
        </TabsListUnstyled>
        <div className="absolute bottom-0 mb-10  box-border flex p-5 rounded-2xl transition-all duration-300 ease-linear">
          <IoMdSettings size={32} className="tab-icon group-hover:text-black" />
          <p className="tab-text group-hover:text-black">Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
