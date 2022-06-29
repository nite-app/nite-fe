import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function LineChart({ chartData, chartOptions }) {
  return <Doughnut data={chartData} options={chartOptions} />;
}

export default LineChart;
