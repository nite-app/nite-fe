import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import QualityCard from "./QualityCard";

function QualityModal() {
  const [qualityOpen, setQualityOpen] = useState(true);

  useEffect(() => {
    if (
      localStorage.qualitydate < new Date().getDate() ||
      !localStorage.qualitydate
    ) {
      setQualityOpen(true);
    } else {
      setQualityOpen(false);
    }
  }, []);

  const onClose = () => {
    setQualityOpen(false);
    localStorage.setItem("qualitydate", new Date().getDate());
  };

  useEffect(() => {
    if (qualityOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [qualityOpen]);

  if (!qualityOpen) return null;
  return (
    <>
      <div
        className="absolute top-0 left-0 overflow-hidden w-screen h-screen z-50 bg-black opacity-30 dark:opacity-50"
        onClick={() => onClose()}
      ></div>
      <div
        id="modal"
        className="box-border absolute top-0 left-0 w-11/12 max-h-5/6 max-w-5/6 overflow-hidden z-50 p-5 bg-white rounded-3xl sm:w-10/12 md:w-1/2 lg:w-2/5 xl:w-1/4 2xl:w-1/5 max-w-[1150px] dark:bg-neutral-800 dark:shadow-md"
      >
        <div className="pt-5">
          <p className="font-semibold text-2xl dark:text-white ">Hi, Anna 👋</p>
          <p className="mt-2 dark:text-white">How are you feeling today?</p>
          <div className="max-w-max box-border mt-8 mb-4">
            <div className="box-border grid-cols-2 gap-y-2">
              <QualityCard text={"⚡ Energetic"} selected={false}></QualityCard>
              <QualityCard text={"😴 Tired"} selected={false}></QualityCard>
              <QualityCard text={"👌 Normal"} selected={true}></QualityCard>
              <QualityCard text={"🙃 Okay"} selected={false}></QualityCard>
              <QualityCard text={"😄 Happy"} selected={false}></QualityCard>
              <QualityCard text={"🧘‍♂️ Calm"} selected={false}></QualityCard>
              <QualityCard text={"😔 Sad"} selected={false}></QualityCard>
              <QualityCard text={"😩 Stressed"} selected={true}></QualityCard>
            </div>
          </div>
          <button
            className="mt-4 rounded-2xl bg-black text-white font-semibold px-4 py-2 w-full h-14"
            onClick={() => onClose()}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default QualityModal;
