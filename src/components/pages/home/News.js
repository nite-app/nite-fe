import React, { useEffect, useState } from "react";

function News({ newsOpen, setNewsOpen }) {
  //get from db api next
  //get from db api next
  const [img, setImg] = useState("/img/demonw.png");
  const [title, setTitle] = useState(
    "Fostering Pro-Sleep Habits During the Day"
  );
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState(
    "Setting the table for high-quality sleep is an all-day affair. A handful of steps that you can take during the day can pave the way for better sleep at night. "
  );

  return (
    <div className="p-5 rounded-3xl bg-white dark:bg-neutral-700">
      <div
        className="box-border rounded-2xl mb-5 bg-cover bg-no-repeat relative aspect-[21/9] 2xl:aspect-[21/7] cursor-pointer"
        style={{ backgroundImage: `url(${img})` }}
        onClick={() => {
          setNewsOpen(true);
        }}
      >
        <img
          src={require("../../../img/logo.png")}
          alt="logo"
          className="absolute bottom-2 right-2 h-10 aspect-square sm:bottom-5 sm:right-5 sm:h-12 dark:text-neutral-100"
        />
      </div>
      <p className="font-semibold text-xl mb-3 dark:text-neutral-100">
        {title}
      </p>
      <p className="dark:text-neutral-100">{preview}</p>
    </div>
  );
}

export default News;
