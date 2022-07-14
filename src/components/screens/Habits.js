import React, { useState, useEffect } from "react";
import Header from "../Header";

function Habits({ active, setActive }) {
  return (
    <div className="w-full h-full min-h-full box-border overflow-y-scroll rounded-3xl bg-backpanel p-8 relative 2xl:p-12">
      <Header active={active} setActive={setActive} />
      <div className="flex"></div>
    </div>
  );
}

export default Habits;
