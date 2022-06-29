import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  TabsUnstyled,
  TabsListUnstyled,
  TabPanelUnstyled,
  TabUnstyled,
} from "@mui/base";

import { IoClose } from "react-icons/io5";

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
        className="box-border absolute top-0 left-0 w-full h-full overflow-hidden flex m-auto z-50 p-5 bg-white rounded-none lg:rounded-3xl lg:w-10/12 lg:h-3/4 xl:w-2/3"
      >
        <div className="flex flex-col box-border w-full">
          <div className="absolute top-10 right-10">
            <IoClose size={32} onClick={onClose} />
          </div>
          <div className="p-5 flex box-border items-center">
            <p className="font-semibold text-2xl">Settings</p>
          </div>
          <div className="flex flex-col p-5 xl:hidden">
            <button className="p-4 bg-gray-100 text-left rounded-2xl mt-2 w-full box-border">
              Personal
            </button>
            <button className="p-4 bg-gray-100 text-left rounded-2xl mt-2 w-full box-border">
              Appearance
            </button>
            <button className="p-4 bg-gray-100 text-left rounded-2xl mt-2 w-full box-border">
              About
            </button>
          </div>
          <div className="hidden xl:flex flex-col mt-5">
            <TabsUnstyled defaultValue={0} className="is-active">
              <div className="flex box-border">
                <div className="w-1/4 box-border">
                  <TabsListUnstyled className="flex flex-col justify-center">
                    <TabUnstyled value={0} className="tab-item group p-5">
                      <p className="tab-text group-hover:text-hovertxt">
                        Dashboard
                      </p>
                    </TabUnstyled>
                    <TabUnstyled value={1} className="tab-item group p-5">
                      <p className="tab-text group-hover:text-hovertxt">Home</p>
                    </TabUnstyled>
                    <TabUnstyled value={2} className="tab-item group p-5">
                      <p className="tab-text group-hover:text-hovertxt">
                        Sleep
                      </p>
                    </TabUnstyled>
                  </TabsListUnstyled>
                </div>
                <div className="w-3/4 box-border">
                  <TabPanelUnstyled
                    value={0}
                    className="w-full"
                  ></TabPanelUnstyled>
                  <TabPanelUnstyled
                    value={1}
                    className="w-full"
                  ></TabPanelUnstyled>
                  <TabPanelUnstyled
                    value={2}
                    className="w-full"
                  ></TabPanelUnstyled>
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
