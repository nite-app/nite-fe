import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import CollapsedSidebar from "./CollapsedSidebar";
import {
  TabsUnstyled,
  TabsListUnstyled,
  TabPanelUnstyled,
  TabUnstyled,
} from "@mui/base";

// side components
import Dashboard from "./screens/Dashboard";
import Home from "./screens/Home";
import Sleep from "./screens/Sleep";
import Habits from "./screens/Habits";

function Main() {
  const [active, setActive] = useState(true);

  return (
    <TabsUnstyled defaultValue={0} className="is-active">
      <div className="flex box-border p-5 w-screen bg-backlight relative">
        <div>{active ? <CollapsedSidebar /> : <></>}</div>
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
