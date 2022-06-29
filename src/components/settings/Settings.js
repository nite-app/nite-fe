import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  TabsUnstyled,
  TabsListUnstyled,
  TabPanelUnstyled,
  TabUnstyled,
} from "@mui/base";

import { IoClose } from "react-icons/io5";

import Personal from "./Personal";
import Appearance from "./Appearance";
import About from "./About";

function Settings({ open, onClose }) {
  if (!open) return null;
  return (
    <>
      <div
        className="absolute top-0 left-0 overflow-hidden w-screen h-screen z-50 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div
        id="settingsModal"
        className="box-border absolute top-0 left-0 w-full h-full overflow-hidden flex m-auto z-50 p-5 bg-white rounded-none sm:rounded-3xl sm:w-10/12 sm:h-3/4 xl:w-2/3 2xl:w-3/5 max-w-[1150px]"
      >
        <div className="flex flex-col box-border w-full">
          <div className="absolute top-10 right-10">
            <IoClose size={32} onClick={onClose} />
          </div>
          <div className="p-5 flex box-border items-center">
            <p className="font-semibold text-3xl">Settings</p>
          </div>
          <div className="flex flex-col p-5 xl:hidden">
            <button className="settings-btn">
              <p className="settings-btntxt">👤 Personal</p>
            </button>
            <button className="settings-btn">
              <p className="settings-btntxt">🎨 Appearance</p>
            </button>
            <button className="settings-btn">
              <p className="settings-btntxt">✌️ About</p>
            </button>
          </div>
          <div className="hidden h-full xl:flex flex-col p-5">
            <TabsUnstyled defaultValue={0} className="is-active">
              <div className="flex box-border">
                <div className="w-1/4 box-border">
                  <TabsListUnstyled className="flex flex-col justify-center">
                    <TabUnstyled value={0} className="settings-tab group p-5">
                      <p className="settings-txt group-hover:text-hovertxt">
                        👤 Personal
                      </p>
                    </TabUnstyled>
                    <TabUnstyled value={1} className="settings-tab group p-5">
                      <p className="settings-txt group-hover:text-hovertxt">
                        🎨 Appearance
                      </p>
                    </TabUnstyled>
                    <TabUnstyled value={2} className="settings-tab group p-5">
                      <p className="settings-txt group-hover:text-hovertxt">
                        ✌️ About
                      </p>
                    </TabUnstyled>
                  </TabsListUnstyled>
                </div>
                <div className="w-3/4 overflow-y-scroll box-border pl-10">
                  <TabPanelUnstyled value={0} className="w-full">
                    <Personal />
                  </TabPanelUnstyled>
                  <TabPanelUnstyled value={1} className="w-full">
                    <Appearance />
                  </TabPanelUnstyled>
                  <TabPanelUnstyled value={2} className="w-full">
                    <About />
                  </TabPanelUnstyled>
                </div>
              </div>
            </TabsUnstyled>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
