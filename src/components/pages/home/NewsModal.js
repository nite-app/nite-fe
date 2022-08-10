import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

function NewsModal({ open, onClose }) {
  //get from db api next
  const [img, setImg] = useState("/img/demonw.png");
  const [title, setTitle] = useState(
    "Fostering Pro-Sleep Habits During the Day"
  );
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState(
    "Setting the table for high-quality sleep is an all-day affair. A handful of steps that you can take during the day can pave the way for better sleep at night. "
  );

  if (!open) return null;
  return (
    <>
      <div
        className="absolute top-0 left-0 overflow-hidden w-screen h-screen z-50 bg-black opacity-30 dark:opacity-50"
        onClick={onClose}
      ></div>
      <div
        id="newsModal"
        className="box-border absolute top-0 left-0 w-11/12 h-5/6 overflow-y-scroll flex m-auto z-50 p-5 bg-white rounded-3xl sm:w-10/12 sm:h-3/4 xl:w-2/3 2xl:w-3/5 max-w-[1150px] dark:bg-neutral-800 dark:shadow-md"
      >
        <div className="flex flex-col box-border w-full sm:p-5">
          <div className="relative flex z-10">
            <IoClose
              size={32}
              onClick={onClose}
              className="absolute right-2 top-2 text-black dark:text-white cursor-pointer"
            />
          </div>
          <div
            className="rounded-2xl w-full mt-15 aspect-[21/9] 2xl:aspect-[21/7] bg-no-repeat bg-cover relative mb-10"
            style={{ backgroundImage: `url(${img})` }}
          >
            <img
              src={require("../../../img/logo.png")}
              alt="logo"
              className="absolute bottom-2 right-2 h-10 aspect-square sm:bottom-5 sm:right-5 sm:h-12 dark:text-neutral-100"
            />
          </div>
          <p className="font-semibold text-2xl mb-3 dark:text-neutral-100">
            {title}
          </p>
          <p className="dark:text-neutral-100">{content}</p>
        </div>
      </div>
    </>
  );
}

export default NewsModal;
