import React from "react";
import Header from "../Header";

function Sleep({ active, setActive }) {
  return (
    <div className="w-full h-full min-h-full box-border overflow-y-scroll rounded-3xl bg-backpanel p-8 relative 2xl:p-12">
      <Header active={active} setActive={setActive} />
    </div>
  );
}

export default Sleep;
