import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  TabsUnstyled,
  TabsListUnstyled,
  TabPanelUnstyled,
  TabUnstyled,
} from "@mui/base";

import {IoClose} from "react-icons/io5"

function Settings({ open, onClose }) {
  if (!open) return null;
  return (
    <>
      <div
        className="absolute top-0 left-0 overflow-hidden w-screen h-screen z-20 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="box-border absolute top-0 left-0 w-full h-full overflow-hidden flex m-auto z-50 p-5 bg-white rounded-none">
        
        <div className="flex flex-col box-border">
          <div className="flex">
            <div className="w-16 h-16 rounded-full bg-pink-400 flex items-center justify-center box-border">
              <p className="font-semibold text-xl">AS</p>
              <IoClose size={32} className="absolute right-10" onClick={onClose}/>
            </div>
            <div className="ml-4 flex flex-col justify-center">
              <p className="font-semibold text-lg">Anna Shumate</p>
              <p className="font-normal text-gray-500">anna@nite.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
