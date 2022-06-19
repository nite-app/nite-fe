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
    maintainAspectRatio: true,
    tension: 0.4,
    pointRadius: 0,
    fill: true,
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

  function toggleSidebar() {}

  return (
    <div className="w-full h-full box-border rounded-3xl bg-backpanel p-12 relative">
      <div className="flex items-center cursor-pointer">
        <BsReverseLayoutSidebarInsetReverse
          size={36}
          className="mr-5"
          onClick={() => {
            setActive(!active);
          }}
        />
        <p className="text-5xl font-semibold">Good morning, Anna</p>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-2xl mt-8 mb-5">30 Days performance</p>
        <div className="flex w-full">
          <div className="min-w-max w-1/5 max-w-sm h-24 mr-8 rounded-xl p-5 bg-[url('./img/performance-1.png')] bg-cover">
            <p className="font-semibold text-xl text-gray-300">Hours slept</p>
            <p className="font-semibold text-xl text-gray-400">216</p>
          </div>
          <div className="min-w-max w-1/5 max-w-sm h-24 mr-8 rounded-xl p-5 bg-[url('./img/performance-2.png')] bg-cover">
            <p className="font-semibold text-xl text-gray-300">Average sleep</p>
            <p className="font-semibold text-xl text-gray-400">7.2</p>
          </div>
          <div className="min-w-max w-1/5 max-w-sm h-24 mr-8 rounded-xl p-5 bg-[url('./img/performance-3.png')] bg-cover">
            <p className="font-semibold text-xl text-gray-300">
              Habits respected
            </p>
            <p className="font-semibold text-xl text-gray-400">87</p>
          </div>
          <div className="min-w-max w-1/5 max-w-sm h-24 mr-8 rounded-xl p-5 bg-[url('./img/performance-4.png')] bg-cover">
            <p className="font-semibold text-xl text-gray-300">Notes taken</p>
            <p className="font-semibold text-xl text-gray-400">23</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-h-96 min-h-max">
        <p className="font-semibold text-2xl mt-10 mb-5">Analytics</p>
        <div className="flex min-h-max max-h-80 h-full">
          <div className="flex box-border justify-center items-center h-full p-5 max-h-80 mr-8 rounded-2xl bg-white min-w-max">
            <LineChart chartData={userData} chartOptions={userOptions} />
          </div>
          <div className="flex h-full h-min-max w-80 p-7 rounded-2xl bg-white">
            <p className="font-semibold text-xl">Sleep quality</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-2xl mt-10 mb-5">Challenges</p>
        <div className="grid grid-cols-2 gap-x-8 w-full h-full box-border">
          <div className="w-full mr-8 rounded-2xl p-8 box-border bg-white">
            <p className="font-semibold text-3xl mb-5">Weekly target</p>
            <p className="font-medium text-xl text-gray-400">25% Achieved</p>
          </div>
          <div className="w-full rounded-2xl p-8 box-border bg-white">
            <p className="font-semibold text-3xl mb-5">Monthly target</p>
            <p className="font-medium text-xl text-gray-400">50% Achieved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
