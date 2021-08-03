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
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      fill: {
        colors: ["#f44366"],
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: "Largest US Cities by Population",
        align: "center",
        margin: 20,
        offsetY: 20,
        style: {
          fontSize: "25px",
        },
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

  const onClick = () => {
    setstate({
      options: {
        ...state.options,
        plotOptions: {
          ...state.options.plotOptions,
          bar: {
            ...state.options.plotOptions.bar,
            horizontal: !state.options.plotOptions.bar.horizontal,
          },
        },
      },
      series: [
        {
          ...state.series,
          data: [
            8550405, 3971883, 2720546, 2296224, 1567442, 1563025, 1469845,
            1394928, 1300092, 1026908,
          ],
        },
      ],
    });
  };
  return (
    <>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        height="450"
        width="100%"
      />
      <button onClick={onClick}>Change Chart Orientation</button>
    </>
  );
};

export default PopChart;
