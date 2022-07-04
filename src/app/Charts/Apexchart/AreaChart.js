import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Chart from "react-apexcharts";
import { TitleTypography } from "../Mui/TitleTypography";

import defData from "../../modules/Charts格式.json";

export function AreaChart({
  data,
  date,
  title,
  titleColors,
  colors,
  height,
  pageValue,
}) {
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState(null);
  const [categories, setCategories] = useState([]);
  const [xaxisAnnotations, setXaxisAnnotations] = useState([]);

  const datetimeData = defData.datetime;

  useEffect(() => {
    if (datetimeData.length) {
      let xaxisAnnotationsTemp = [];
      datetimeData.map((res) => {
        xaxisAnnotationsTemp.push({
          x: new Date(res.x).getTime(),
          x2: new Date(res.x2).getTime(),
          fillColor: "#ff4560",
          opacity: pageValue === "date" ? 0.15 : 0,
          label: {
            borderColor: "#B3F7CA",
            style: {
              fontSize: "16px",
              color: "#fff",
              background: "#ff4560",
            },
          },
        });
      });
      setXaxisAnnotations(xaxisAnnotationsTemp);
    }
  }, [datetimeData]);

  useEffect(() => {
    if (data.length) {
      setSeries(data);
    }
    if (date.length) {
      setCategories(date);
    }
  }, [data]);

  useEffect(() => {
    setOptions({
      chart: {
        height: 350,
        type: "area",
        zoom: {
          enabled: false,
        },
      },
      colors: colors,
      annotations: {
        xaxis: xaxisAnnotations,
        //  [
        //   {
        //     x: new Date("28 Jan 2022").getTime(),
        //     x2: new Date("7 Feb 2022").getTime(),
        //     fillColor: "#ff4560",
        //     opacity: pageValue === "date" ? 0.15 : 0,
        //     label: {
        //       borderColor: "#B3F7CA",
        //       style: {
        //         fontSize: "16px",
        //         color: "#fff",
        //         background: "#ff4560",
        //       },
        //       // text: "過年期間",
        //     },
        //   },
        //   {
        //     x: new Date("28 Jan 2020").getTime(),
        //     x2: new Date("7 Feb 2020").getTime(),
        //     fillColor: "#ff4560",
        //     opacity: pageValue === "date" ? 0.15 : 0,
        //     label: {
        //       borderColor: "#B3F7CA",
        //       style: {
        //         fontSize: "16px",
        //         color: "#fff",
        //         background: "#ff4560",
        //       },
        //       // text: "過年期間",
        //     },
        //   },
        // ],
      },
      dataLabels: {
        enabled: (categories.length && categories.length) <= 10 ? true : false,
      },
      stroke: {
        curve: "straight",
      },
      // title: {
      //   text: title,
      //   align: "left",
      // },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        type: title === "每個月總金額" ? "categories" : "datetime",
        categories: categories,
        tickAmount: 8,
        labels: {
          formatter: function (value, timestamp, opts) {
            if (title !== "每個月總金額")
              return opts.dateFormatter(new Date(timestamp), "yyyy MMM dd");
            else
              return value  
          },
        },
      },
      legend: {
        show: true,
        position: "top",
      },
    });
  }, [categories, xaxisAnnotations]);

  return (
    <>
      <TitleTypography title={title} titleColors={titleColors} />
      {options ? (
        <Chart
          options={options}
          series={series}
          type="area"
          height={height}
          width={"100%"}
        />
      ) : null}
    </>
  );
}
