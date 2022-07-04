import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Chart from "react-apexcharts";
import { TitleTypography } from "../Mui/TitleTypography";

export function BarChart({
  data,
  dataName,
  title,
  titleColors,
  colors,
  height,
  stacked,
  distributed,
}) {
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (data && data.length) {
      setSeries(data);
    }
    if (dataName && dataName.length) {
      setCategories(dataName);
    }
  }, [data, dataName]);

  useEffect(() => {
    setOptions({
      chart: {
        type: "bar",
        height: 350,
        stacked: stacked,
      },
      colors: colors,
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: distributed,
          columnWidth: "55%",
          endingShape: "rounded",
          dataLabels: {
            position: "bottom", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return (val / 1000000).toFixed(2) + "百萬";
        },
        offsetX: 10,
        style: {
          fontSize: "12px",
          colors: ["#022251"],
        },
      },
      // title: {
      //   text: title,
      //   align: 'left'
      // },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: categories,
      },
      yaxis: {
        labels: {
          style: {
            fontSize: "14px",
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          title: {
            formatter: function (val) {
              if (series.length && !series[0].name) return "";
              else return val;
            },
          },
        },
      },
      legend: {
        show: false,
      }
    });
  }, [categories]);

  return (
    <>
      <TitleTypography title={title} titleColors={titleColors} />
      {options ? (
        <Chart
          options={options}
          series={series}
          type="bar"
          height={height}
          width={"99%"}
        />
      ) : null}
    </>
  );
}
