import React, { useState, useEffect } from "react";

function QualityCard({ text, selected }) {
  const [style, setStyle] = useState();

  useEffect(() => {
    if (selected)
      setStyle(
        "p-3 rounded-2xl mr-2 mt-2 bg-gray-400 pr-5 cursor-pointer whitespace-nowrap w-fit inline-block dark:bg-neutral-600"
      );
    else
      setStyle(
        "p-3 rounded-2xl mr-2 mt-2 bg-gray-200 pr-5 cursor-pointer whitespace-nowrap w-fit inline-block dark:bg-neutral-400"
      );
  }, []);

  return (
    <div className={style}>
      <p>{text}</p>
    </div>
  );
}

export default QualityCard;
