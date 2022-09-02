import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

function NewsModal({ open, onClose }) {
  let img = "/img/demonw.png";
  const [data, setData] = useState([
    {
      title: "Fostering Pro-Sleep Habits During the Day",
      img: "/img/demonw.png",
      preview:
        "Setting the table for high-quality sleep is an all-day affair. A handful of steps that you can take during the day can pave the way for better sleep at night.",
      content: {
        paragraphs: [
          {
            subtitle: "sub1",
            text: "text1",
          },
          {
            subtitle: "sub2",
            text: "text2",
          },
        ],
      },
    },
  ]);

  if (!open) return null;
  return (
    <>
      <div
        className="absolute top-0 left-0 overflow-hidden w-screen h-screen z-50 bg-black opacity-30 dark:opacity-50"
        onClick={onClose}
      ></div>
      <div
        id="modal"
        className="box-border absolute top-0 left-0 w-11/12 h-5/6 max-h-5/6 max-w-5/6 overflow-y-scroll flex m-auto z-50 p-5 bg-white rounded-3xl sm:w-10/12 sm:h-3/4 xl:w-2/3 2xl:w-3/5 max-w-[1150px] dark:bg-neutral-800 dark:shadow-md"
      >
        <div className="flex flex-col box-border w-full sm:p-5">
          <div className="relative flex z-10">
            <IoClose
              size={32}
              onClick={onClose}
              className="absolute right-2 top-2 text-black dark:text-white cursor-pointer"
            />
          </div>
          <div className="relative mb-10">
            <img
              src="./img/demonw.png"
              className="rounded-2xl w-full mt-15 relative"
              alt="news img"
            ></img>
            <img
              src={require("../../../img/logo.png")}
              alt="logo"
              className="absolute bottom-2 right-2 h-10 aspect-square sm:bottom-5 sm:right-5 sm:h-12 dark:text-neutral-100"
            />
          </div>
          {/* {data &&
            data.length > 0 &&
            data.map((item) => (
              <p className="font-semibold text-2xl mb-3 dark:text-neutral-100">
                {item.title}
              </p>
            ))}
          {data.content.paragraphs.map((par) => {
            return (
              <div>
                <p>{par.subtitle}</p>
                <p>{par.text}</p>
              </div>
            );
          })} */}
          <div>
            <p className="font-semibold text-2xl mb-5 dark:text-white">
              Fostering Pro-Sleep Habits During the Day
            </p>
            <p className="font-medium text-lg mt-5 dark:text-neutral-200">
              • See the Light of Day
            </p>
            <p className="mt-2 dark: dark:text-neutral-300">
              Our internal clocks are regulated by light exposure. Sunlight has
              the strongest effect, so try to take in daylight by getting
              outside or opening up windows or blinds to natural light. Getting
              a dose of daylight early in the day can help normalize your
              circadian rhythm. If natural light isn't an option, you can talk
              with your doctor about using a light therapy box.
            </p>
            <p className="font-medium text-lg mt-5 dark:text-neutral-200">
              • Find Time to Move
            </p>
            <p className="mt-2 mb-5 dark:text-neutral-300">
              Daily exercise has across-the-board benefits for health, and the
              changes it initiates in energy use and body temperature can
              promote solid sleep. Most experts advise against intense exercise
              close to bedtime because it may hinder your body's ability to
              effectively settle down before sleep.
            </p>
            <p className="text-neutral-500 mb-10">
              discover more{" "}
              <a
                href="https://www.sleepfoundation.org/sleep-hygiene/healthy-sleep-tips"
                className="text-blue-700 dark:text-blue-900"
              >
                here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsModal;
