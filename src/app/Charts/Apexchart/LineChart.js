import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Chart from "react-apexcharts";
import { TitleTypography } from "../Mui/TitleTypography";

import defData from "../../modules/Charts格式.json";

export function LineChart({data,date,title,titleColors,colors,height,pageValue}) {
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState(null);
  const [categories, setCategories] = useState([]);
  const [xaxisAnnotations, setXaxisAnnotations] = useState([]);

  const datetimeData = defData.datetime;

  useEffect(()=>{
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
  },[datetimeData])

  useEffect(() => {
    if(data.length){
      setSeries(data)
    }
    if(date.length){
      setCategories(date)
    }
  }, [data]);

  useEffect(() => {
    setOptions({
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        colors: colors,
        annotations: {
          xaxis:xaxisAnnotations
          //  [
          //   {
          //     x: new Date("28 Jan 2022").getTime(),
          //     x2: new Date("7 Feb 2022").getTime(),
          //     fillColor: "#ff4560",
          //     opacity: pageValue==="date"?0.15:0,
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
          enabled: false
        },
        stroke: {
          curve: 'straight',
          width: 3
        },
        // title: {
        //   text: title,
        //   align: 'left'
        // },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          type: 'datetime',
          categories: categories,
        },
        legend: {
          show: true,
          position: 'top',
        }
      }
    );
  }, [series]);

  return (
    <>
        <TitleTypography title={title} titleColors={titleColors}/>
          {options ? (
            <Chart
              options={options}
              series={series}
              type="line"
              height={height}
              width={"100%"}
            />
          ) : null}
    </>
  );
}
