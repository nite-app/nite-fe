import React, { useState, useEffect } from "react";
import "../styles/splash.css";

let container = document.querySelector(".splash-container");
let logo = document.querySelector(".logo-p");
let logospan = document.querySelectorAll(".logo");

function InnerSplash() {
  const [logospan1, setLogoSpan1] = useState("logo");
  const [logospan2, setLogoSpan2] = useState("logo");
  const [container, setContainer] = useState("splash-container");

  useEffect(() => {
    setTimeout(() => {
      setLogoSpan1("logo active");
    }, 300);
    setTimeout(() => {
      setLogoSpan2("logo active");
    }, 600);
    setTimeout(() => {
      setTimeout(() => {
        setLogoSpan1("logo fade");
      }, 50);
      setTimeout(() => {
        setLogoSpan2("logo fade");
      }, 100);
    }, 2000);
    setTimeout(() => {
      setContainer("splash-container opacity-0");
      setTimeout(() => {
        setContainer("splash-container hidden");
      }, 1000);
    }, 2300);
  }, []);

  return (
    <div className={container}>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <p className="logo-p">
          <span className={logospan1}>ni</span>
          <span className={logospan2}>te.</span>
        </p>
      </div>
    </div>
  );
}

export default InnerSplash;
