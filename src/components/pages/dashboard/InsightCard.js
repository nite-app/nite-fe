import React from "react";

function InsightCard({ title, data, img }) {
  return (
    <div
      className="min-w-max w-1/5 max-w-sm h-fit mr-8 rounded-xl p-5 bg-cover md:w-full"
      style={{ backgroundImage: `url(${img})` }}
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
