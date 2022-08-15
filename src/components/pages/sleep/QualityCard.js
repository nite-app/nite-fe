import React, { useState, useEffect } from "react";

function QualityCard({ text, selected }) {
  const [style, setStyle] = useState();

  useEffect(() => {
    if (selected)
      setStyle("p-3 rounded-2xl mr-2 bg-gray-400 pr-5 cursor-pointer");
    else setStyle("p-3 rounded-2xl mr-2 bg-gray-200 pr-5 cursor-pointer");
  }, []);

  return (
    <div className={style}>
      <p>{text}</p>
    </div>
  );
}

export default QualityCard;
