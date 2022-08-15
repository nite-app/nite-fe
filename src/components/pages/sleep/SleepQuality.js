import React from "react";
import QualityCard from "./QualityCard";

function SleepQuality() {
  return (
    <div className="flex flex-col rounded-3xl bg-white w-full p-5 dark:bg-neutral-700">
      <p className="font-semibold text-lg mb-3">How do you feel today?</p>
      <div className="max-w-max box-border">
        <div className="flex mt-2">
          <QualityCard text={"⚡ Energetic"} selected={false}></QualityCard>
          <QualityCard text={"⚡ Energetic"} selected={false}></QualityCard>
          <QualityCard text={"⚡ Energetic"} selected={true}></QualityCard>
        </div>
        <div className="flex mt-2">
          <QualityCard text={"⚡ Energetic"} selected={true}></QualityCard>
          <QualityCard text={"⚡ Energetic"} selected={false}></QualityCard>
          <QualityCard text={"⚡ Energetic"} selected={false}></QualityCard>
        </div>
        <div className="flex mt-2">
          <QualityCard text={"⚡ Energetic"} selected={false}></QualityCard>
          <QualityCard text={"⚡ Energetic"} selected={false}></QualityCard>
        </div>
      </div>
    </div>
  );
}

export default SleepQuality;
