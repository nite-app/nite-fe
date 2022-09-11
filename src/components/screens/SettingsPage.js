import React, { useState } from "react";
import Header from "../Header";
import Personal from "../settings/Personal";
import Appearance from "../settings/Appearance";
import About from "../settings/About";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

import {
  TabsUnstyled,
  TabsListUnstyled,
  TabPanelUnstyled,
  TabUnstyled,
} from "@mui/base";

function SettingsPage({ active, setActive }) {
  const [personalOpen, setPersonalOpen] = useState(false);
  const [appearanceOpen, setAppearanceOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="w-full h-full min-h-full box-border overflow-y-scroll rounded-3xl bg-backpanel p-8 relative 2xl:p-12 dark:bg-neutral-800">
      <Header active={active} setActive={setActive} />
      <div className="p-5 pl-0 mt-5 flex box-border items-center">
        <p className="font-semibold text-3xl dark:text-white">Settings</p>
      </div>
      <div className="flex flex-col p-5 xl:hidden">
        <button
          className="settings-btn"
          onClick={() => {
            setPersonalOpen(!personalOpen);
            setAppearanceOpen(false);
            setAboutOpen(false);
          }}
        >
          <p className="settings-btntxt">👤 Personal</p>
        </button>
        {personalOpen ? <Personal /> : <></>}
        <button
          className="settings-btn"
          onClick={() => {
            setAppearanceOpen(!appearanceOpen);
            setPersonalOpen(false);
            setAboutOpen(false);
          }}
        >
          <p className="settings-btntxt">🎨 Appearance</p>
        </button>
        {appearanceOpen ? <Appearance /> : <></>}
        <button
          className="settings-btn"
          onClick={() => {
            setAboutOpen(!aboutOpen);
            setPersonalOpen(false);
            setAppearanceOpen(false);
          }}
        >
          <p className="settings-btntxt">✌️ About</p>
        </button>
        {aboutOpen ? <About /> : <></>}
        <button className="settings-btn mb-5 bg-red-50 shadow-md">
          <p className="settings-btntxt text-red-600 dark:text-red-500">
            🛫 Logout
          </p>
        </button>
      </div>
      <div className="hidden xl:flex flex-col p-5 pl-0">
        <TabsUnstyled defaultValue={0} className="is-active">
          <div className="flex box-border">
            <div className="w-1/4 box-border">
              <TabsListUnstyled className="flex flex-col justify-center">
                <TabUnstyled value={0} className="settings-tab group p-5">
                  <p className="settings-txt">👤 Personal</p>
                </TabUnstyled>
                <TabUnstyled value={1} className="settings-tab group p-5">
                  <p className="settings-txt">🎨 Appearance</p>
                </TabUnstyled>
                <TabUnstyled value={2} className="settings-tab group p-5">
                  <p className="settings-txt">✌️ About</p>
                </TabUnstyled>
              </TabsListUnstyled>
            </div>
            <div className="w-3/4 overflow-y-scroll box-border pl-10 relative">
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
  );
}

export default SettingsPage;
