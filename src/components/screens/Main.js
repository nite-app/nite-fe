import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../sidebars/Sidebar";
import CollapsedSidebar from "../sidebars/CollapsedSidebar";
import {
  TabsUnstyled,
  TabsListUnstyled,
  TabPanelUnstyled,
  TabUnstyled,
} from "@mui/base";
import NewsModal from "../pages/home/NewsModal";
import QualityModal from "../pages/sleep/QualityModal";

// side components
import Dashboard from "./Dashboard";
import Home from "./Home";
import Sleep from "./Sleep";
import Habits from "./Habits";
import SettingsPage from "./SettingsPage";

import Settings from "../settings/Settings";
import Splash from "../Splash";

function Main() {
  const [active, setActive] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);

  const [mainStyle, setMainStyle] = useState(
    "p-0 flex flex-col h-screen box-border w-screen bg-backlight relative sm:p-5 xl:flex-row 2xl:h-screen"
  );

  useEffect(() => {
    if (settingsOpen === true || newsOpen === true) {
      setMainStyle(
        "overflow-hidden flex flex-col h-screen box-border w-screen bg-backlight relative sm:p-5 xl:flex-row 2xl:h-screen dark:bg-neutral-900"
      );
    } else {
      setMainStyle(
        "flex flex-col h-screen box-border w-screen bg-backlight relative sm:p-5 xl:flex-row 2xl:h-screen dark:bg-neutral-900"
      );
    }
  }, [settingsOpen, newsOpen]);

  var metaThemeColor = document.querySelector("meta[name=theme-color]");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      metaThemeColor.setAttribute("content", "#171717");
    } else {
      document.documentElement.classList.remove("dark");
      metaThemeColor.setAttribute("content", "#ECECEC");
    }
  }, []);

  return (
    <TabsUnstyled defaultValue={0} className="is-active">
      <div className={mainStyle}>
        <Splash />
        <Settings
          open={settingsOpen}
          onClose={() => setSettingsOpen(false)}
        ></Settings>
        <NewsModal
          open={newsOpen}
          onClose={() => setNewsOpen(false)}
        ></NewsModal>
        <QualityModal />
        {active ? (
          <Sidebar
            settingsOpen={settingsOpen}
            setSettingsOpen={setSettingsOpen}
          />
        ) : (
          <CollapsedSidebar
            settingsOpen={settingsOpen}
            setSettingsOpen={setSettingsOpen}
          />
        )}
        <TabPanelUnstyled value={0} className="w-full ">
          <Dashboard active={active} setActive={setActive} />
        </TabPanelUnstyled>
        <TabPanelUnstyled value={1} className="w-full">
          <Home
            active={active}
            setActive={setActive}
            newsOpen={newsOpen}
            setNewsOpen={setNewsOpen}
          />
        </TabPanelUnstyled>
        <TabPanelUnstyled value={2} className="w-full">
          <Sleep active={active} setActive={setActive} />
        </TabPanelUnstyled>
        <TabPanelUnstyled value={3} className="w-full">
          <Habits active={active} setActive={setActive} />
        </TabPanelUnstyled>
        <TabPanelUnstyled value={4} className="w-full">
          <SettingsPage active={active} setActive={setActive} />
        </TabPanelUnstyled>
      </div>
    </TabsUnstyled>
  );
}

export default Main;
