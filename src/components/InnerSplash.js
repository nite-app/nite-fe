import React, { useEffect } from "react";
import "../styles/splash.css";

let container = document.querySelector(".splash-container");
let logo = document.querySelector(".logo-p");
let logospan = document.querySelectorAll(".logo");

function InnerSplash() {
  useEffect(() => {
    logospan.forEach((span, i) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (i + 1) * 300);
    }, 0);
    setTimeout(() => {
      logospan.forEach((span, i) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (i + 1) * 50);
      });
    }, 2000);
    setTimeout(() => {
      container.style.opacity = 0;
    }, 2300);
  }, []);

  return (
    <div className="splash-container">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <p className="logo-p">
          <span className="logo">ni</span>
          <span className="logo">te.</span>
        </p>
      </div>
    </div>
  );
}

export default InnerSplash;
