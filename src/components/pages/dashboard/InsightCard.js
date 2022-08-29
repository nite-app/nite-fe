import React from "react";

function InsightCard({ title, data, img }) {
  return (
    <div
      className="min-w-max w-1/5 mr-8 rounded-xl p-5 bg-cover bg-right bg-no-repeat md:w-full md:bg-cover"
      style={{ backgroundImage: `url(${img})`, minWidth: 200 }}
    >
      <p className="font-semibold text-base text-gray-300 2xl:text-xl">
        {title}
      </p>
      <p className="font-semibold text-base text-gray-400 2xl:text-xl">
        {data}
      </p>
    </div>
  );
}

export default InsightCard;
