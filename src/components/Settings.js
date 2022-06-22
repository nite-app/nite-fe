import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Settings({ open, onClose }) {
  if (!open) return null;
  return (
    <>
      <div className="settingsOverlay" onClick={onClose}></div>
      <div className="settingsModal"></div>
    </>
  );
}

export default Settings;
