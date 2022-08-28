import React, { useState, useEffect } from "react";
import Header from "../Header";
import InsightCard from "../pages/dashboard/InsightCard";
import LineChart from "../charts/LineChart";
import { chartData } from "../../data/Data";
import ProgressBar from "../pages/dashboard/ProgressBar";
import DonutChart from "../pages/dashboard/DonutChart";

let width, height, gradient;
function getGradient(ctx, chartArea) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (gradient === null || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.left, 0, chartArea.right);
    gradient.addColorStop(0, "rgba(76, 223, 232, 1)");
    gradient.addColorStop(1, "rgba(121, 71, 247, 1)");
  }

  return gradient;
}

function getBackGradient(ctx, chartArea) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (gradient === null || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.left, 0, chartArea.right);
    gradient.addColorStop(0, "rgba(76, 223, 232, 0.2)");
    gradient.addColorStop(1, "rgba(121, 71, 247, 0.2)");
  }

  return gradient;
}

function Dashboard({ active, setActive }) {
  const [userData, setUserData] = useState({
    labels: chartData.map((data) => data.month),
    datasets: [
      {
        label: "Monthly average",
        data: chartData.map((data) => data.average),
        borderColor: "rgba(121,71,247,0.8)",
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return null;
          }
          return getBackGradient(ctx, chartArea);
        },
      },
    ],
  });

  const [userOptions, setUserOptions] = useState({
    responsive: true,
    maintainAspectRatio: false,
    tension: 0.4,
    pointRadius: 0,
    fill: true,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          color: "rgba(0,0,0,0.5)",
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        grace: "15%",
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          color: "rgba(0,0,0,0.5)",
        },
        grid: {
          display: true,
          color: "rgba(0,0,0,0.05)",
          drawBorder: false,
        },
      },
    },
    elements: {
      line: {},
    },
  });

  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 160).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        var text = "Foo-bar",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  return (
    <div className="w-full h-full min-h-full box-border overflow-y-scroll rounded-3xl bg-backpanel p-8 relative 2xl:p-12 dark:bg-neutral-800">
      <Header active={active} setActive={setActive} />
      <div className="flex flex-col">
        <p className="font-semibold text-xl mt-8 mb-5 2xl:text-2xl dark:text-white">
          30 Days performance
        </p>
        <div className="flex w-full overflow-x-scroll md:w-full 2xl:w-full 2xl:overflow-hidden">
          <InsightCard
            title={"Hours slept"}
            data={"216"}
            img={"/img/performance-1.png"}
          />
          <InsightCard
            title={"Average sleep"}
            data={"7.2"}
            img={"/img/performance-2.png"}
          />
          <InsightCard
            title={"Habits respected"}
            data={"87"}
            img={"/img/performance-3.png"}
          />
          <InsightCard
            title={"Notes taken"}
            data={"23"}
            img={"/img/performance-4.png"}
          />
        </div>
      </div>
      <div className="flex flex-col ">
        <p className="font-semibold text-xl mt-10 mb-5 2xl:text-2xl dark:text-white">
          Analytics
        </p>
        <div className="flex flex-col xl:flex-row 2xl:flex-row">
          <div
            className="flex box-border w-full justify-center items-center p-5 mr-8 mb-5 rounded-2xl bg-white 
            xl:w-1/2 h-72 max-h-64 xl:mb-0
            2xl:w-1/2 h-80 max-h-72 2xl:mb-0
            dark:bg-neutral-700"
          >
            <LineChart chartData={userData} chartOptions={userOptions} />
          </div>
          <div className="flex flex-col h-full w-full p-7 rounded-2xl bg-white xl:w-1/3 2xl:w-1/3 dark:bg-neutral-700">
            <p className="font-semibold text-xl dark:text-neutral-50 mb-5">
              Sleep quality
            </p>
            <ProgressBar text={"85%"} progress={85} />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-xl mt-10 mb-5 2xl:text-2xl dark:text-white">
          Challenges
        </p>
        <div className="grid grid-rows-2 gap-x-8 gap-y-8 w-full h-full box-border xl:grid-cols-2 grid-rows-1">
          <div className="w-full mr-8 rounded-2xl p-8 box-border bg-white md:flex justify-between dark:bg-neutral-700">
            <div>
              <p className="font-semibold text-2xl mb-4 dark:text-neutral-100">
                Weekly target
              </p>
              <p className="font-medium text-lg text-gray-400">25% Achieved</p>
            </div>
            <div className="aspect-square mt-5 lg:mt-0">
              <DonutChart size="100" progress="25" label="25%" />
            </div>
          </div>
          <div className="w-full rounded-2xl p-8 box-border bg-white md:flex justify-between dark:bg-neutral-700">
            <div>
              <p className="font-semibold text-2xl mb-4 dark:text-neutral-100">
                Monthly target
              </p>
              <p className="font-medium text-lg text-gray-400">50% Achieved</p>
            </div>
            <div className="aspect-square mt-5 lg:mt-0">
              <DonutChart size="100" progress="50" label="50%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
