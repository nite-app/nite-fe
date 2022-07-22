import React from "react";
import { Tooltip as Tip } from "@mui/material";

function Tooltip({ title, children }) {
  return <Tip title={<p className="text-white">{title}</p>}>{children}</Tip>;
}

export default Tooltip;
