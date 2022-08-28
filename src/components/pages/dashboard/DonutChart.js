import React from "react";
import "../../../styles/donut.css";

function DonutChart(props) {
  let {
    size = 150,
    progress = 0,
    trackWidth = 10,
    trackColor = `#F6F6F6`,
    indicatorWidth = 10,
    indicatorColor = `#F9896B`,
    indicatorCap = `round`,
    label = `0%`,
    labelColor = `#333`,
  } = props;

  const center = size / 2,
    radius =
      center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * ((100 - progress) / 100);

  return (
    <>
      <div
        className="svg-pi-wrapper"
        style={{ width: size + "px", height: size + "px" }}
      >
        <svg className="svg-pi" style={{ width: size, height: size }}>
          <circle
            className="svg-pi-track"
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={trackColor}
            strokeWidth={trackWidth}
          />
          <circle
            className={`svg-pi-indicator`}
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={indicatorColor}
            strokeWidth={indicatorWidth}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            strokeLinecap={indicatorCap}
          />
        </svg>
        <div className="svg-pi-label">
          <span className="font-bold text-sm dark:text-white">{label}</span>
        </div>
      </div>
    </>
  );
}

export default DonutChart;
