import React from "react";
import QualityCard from "./QualityCard";

function SleepQuality() {
  return (
    <div className="flex flex-col rounded-3xl bg-white w-full p-5 dark:bg-neutral-700">
      <p className="font-semibold text-lg mb-3">How do you feel today?</p>
      <div className="max-w-max box-border">
        <div className="mt-2 box-border grid-cols-2 gap-y-2">
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
    </div>
  );
}

export default SleepQuality;
