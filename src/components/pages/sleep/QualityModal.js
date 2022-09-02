import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

function QualityModal() {
  const [qualityOpen, setQualityOpen] = useState(true);

  // useEffect(() => {
  //   if (!localStorage.qualityopen) localStorage.setItem("qualityopen", false);
  //   if (!localStorage.qualitydate)
  //     localStorage.setItem("qualitydate", new Date().getDay());
  //   if (
  //     localStorage.qualityopen === false &&
  //     localStorage.qualitydate < new Date().getDay()
  //   ) {
  //     setQualityOpen(true);
  //   } else {
  //     setQualityOpen(false);
  //   }
  // }, []);

  if (!qualityOpen) return null;
  return (
    <>
      <div
        className="absolute top-0 left-0 overflow-hidden w-screen h-screen z-50 bg-black opacity-30 dark:opacity-50"
        onClick={() => setQualityOpen(false)}
      ></div>
      <div
        id="modal"
        className="box-border absolute top-0 left-0 w-11/12 h-5/6 max-h-5/6 max-w-5/6 overflow-hidden z-50 p-5 bg-white rounded-3xl sm:w-10/12 sm:h-3/4 xl:w-2/3 2xl:w-2/5 max-w-[1150px] dark:bg-neutral-800 dark:shadow-md"
      >
        <div className="pt-8">
          <p className="font-semibold text-2xl">👋 Hi, Anna</p>
        </div>
      </div>
    </>
  );
}

export default QualityModal;
