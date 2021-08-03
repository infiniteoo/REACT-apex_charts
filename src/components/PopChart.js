import React, { useState } from "react";
import Chart from "react-apexcharts";

const PopChart = () => {
  const [state, setstate] = useState({
    options: {
      chart: {
        background: "#f4f4f4",
        foreColor: "#333",
      },
      xaxis: {
        categories: [
          "New York",
          "Los Angeles",
          "Chicago",
          "Houston",
          "Philadelphia",
          "Phoenix",
          "San Antonio",
          "San Diego",
          "Dallas",
          "San Jose",
        ],
      },
    },
    series: [
      {
        name: "Population",
        data: [
          8550405, 3971883, 2720546, 2296224, 1567442, 1563025, 1469845,
          1394928, 1300092, 1026908,
        ],
      },
    ],
  });
  return (
    <Chart
      options={state.options}
      series={state.series}
      type="bar"
      height="450"
      width="100%"
    />
  );
};

export default PopChart;
