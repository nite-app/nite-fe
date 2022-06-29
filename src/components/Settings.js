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
        <div className="flex flex-col box-border">
          <div className="absolute top-10 right-10">
            <IoClose size={32} onClick={onClose} />
          </div>
          <div className="p-5 flex box-border items-center">
            <p className="font-semibold text-2xl">Settings</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
