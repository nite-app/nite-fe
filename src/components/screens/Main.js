import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../sidebars/Sidebar";
import CollapsedSidebar from "../sidebars/CollapsedSidebar";
import {
  TabsUnstyled,
  TabsListUnstyled,
  TabPanelUnstyled,
  TabUnstyled,
} from "@mui/base";

// side components
import Dashboard from "./Dashboard";
import Home from "./Home";
import Sleep from "./Sleep";
import Habits from "./Habits";

import Settings from "../settings/Settings";

function Main() {
  const [active, setActive] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <TabsUnstyled defaultValue={0} className="is-active">
      <div
        className=" p-0 flex flex-col h-screen box-border w-screen bg-backlight relative
        sm:p-5 xl:flex-row 2xl:h-screen"
      >
        <Settings
          open={settingsOpen}
          onClose={() => setSettingsOpen(false)}
        ></Settings>
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
        <TabPanelUnstyled value={0} className="w-full">
          <Dashboard active={active} setActive={setActive} />
        </TabPanelUnstyled>
        <TabPanelUnstyled value={1} className="w-full">
          <Home />
        </TabPanelUnstyled>
        <TabPanelUnstyled value={2} className="w-full">
          <Sleep />
        </TabPanelUnstyled>
        <TabPanelUnstyled value={3} className="w-full">
          <Habits />
        </TabPanelUnstyled>
      </div>
    </TabsUnstyled>
  );
}

export default Main;
