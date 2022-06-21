import React, { useState } from "react";
import { BsReverseLayoutSidebarInsetReverse } from "react-icons/bs";
import LineChart from "../LineChart";
import { chartData } from "../../Data";

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
        // borderColor: function (context) {
        //   const chart = context.chart;
        //   const { ctx, chartArea } = chart;

        //   if (!chartArea) {
        //     // This case happens on initial chart load
        //     return null;
        //   }
        //   return getGradient(ctx, chartArea);
        // },
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

  return (
    <div className="w-full h-full box-border rounded-3xl bg-backpanel p-8 relative 2xl:p-12">
      <div className="flex items-center cursor-pointer">
        <BsReverseLayoutSidebarInsetReverse
          size={28}
          className="mr-5"
          onClick={() => {
            setActive(!active);
          }}
        />
        <p className="text-3xl font-semibold 2xl:text-5xl">
          Good morning, Anna
        </p>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-xl mt-8 mb-5 2xl:text-2xl">
          30 Days performance
        </p>
        <div className="flex w-72 overflow-x-scroll md:w-full 2xl:w-full 2xl:overflow-hidden">
          <div className="min-w-max w-1/5 max-w-sm h-fit mr-8 rounded-xl p-5 bg-[url('./img/performance-1.png')] bg-cover md:w-full">
            <p className="font-semibold text-base text-gray-300 2xl:text-xl">
              Hours slept
            </p>
            <p className="font-semibold text-base text-gray-400 2xl:text-xl">
              216
            </p>
          </div>
          <div className="min-w-max w-1/5 max-w-sm h-fit mr-8 rounded-xl p-5 bg-[url('./img/performance-2.png')] bg-cover md:w-full">
            <p className="font-semibold text-base text-gray-300 2xl:text-xl">
              Average sleep
            </p>
            <p className="font-semibold text-base text-gray-400 2xl:text-xl">
              7.2
            </p>
          </div>
          <div className="min-w-max w-1/5 max-w-sm h-fit mr-8 rounded-xl p-5 bg-[url('./img/performance-3.png')] bg-cover md:w-full">
            <p className="font-semibold text-base text-gray-300 2xl:text-xl">
              Habits respected
            </p>
            <p className="font-semibold text-base text-gray-400 2xl:text-xl">
              87
            </p>
          </div>
          <div className="min-w-max w-1/5 max-w-sm h-fit mr-8 rounded-xl p-5 bg-[url('./img/performance-4.png')] bg-cover md:w-full">
            <p className="font-semibold text-base text-gray-300 2xl:text-xl">
              Notes taken
            </p>
            <p className="font-semibold text-base text-gray-400 2xl:text-xl">
              23
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <p className="font-semibold text-xl mt-10 mb-5 2xl:text-2xl">
          Analytics
        </p>
        <div className="flex flex-col xl:flex-row 2xl:flex-row">
          <div
            className="flex box-border w-full justify-center items-center p-5 mr-8 mb-5 rounded-2xl bg-white 
            xl:w-1/2 h-72 max-h-64 xl:mb-0
            2xl:w-1/3 h-80 max-h-72 2xl:mb-0"
          >
            <LineChart chartData={userData} chartOptions={userOptions} />
          </div>
          <div className="flex h-full h-min-max w-full p-7 rounded-2xl bg-white xl:w-1/3 2xl:w-1/3">
            <p className="font-semibold text-xl">Sleep quality</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-xl mt-10 mb-5 2xl:text-2xl">
          Challenges
        </p>
        <div className="grid grid-rows-2 gap-x-8 gap-y-8 w-full h-full box-border 2xl:grid-cols-2 grid-rows-1">
          <div className="w-full mr-8 rounded-2xl p-8 box-border bg-white">
            <p className="font-semibold text-2xl mb-4">Weekly target</p>
            <p className="font-medium text-lg text-gray-400">25% Achieved</p>
          </div>
          <div className="w-full rounded-2xl p-8 box-border bg-white">
            <p className="font-semibold text-2xl mb-4">Monthly target</p>
            <p className="font-medium text-lg text-gray-400">50% Achieved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
