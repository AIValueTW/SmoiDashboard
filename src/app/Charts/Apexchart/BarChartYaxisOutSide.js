import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Chart from "react-apexcharts";
import { TitleTypography } from "../Mui/TitleTypography";
import { Box } from "@mui/system";

function getChartHeight(length) {
  var height = 700;

  if (length < 12) {
    return height;
  } else {
    height = height * (length / 12);
  }
  return height;
}


export function BarChartYaxisOutSide({
  data,
  dataName,
  title,
  titleColors,
  colors,
  height,
  stacked,
  distributed,
  value,
  setValue
}) {
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState(null);
  const [categories, setCategories] = useState([]);
  const [chartHeight,setChartHeight]= useState()

  useEffect(() => {
    if (data && data.length) {
      setSeries([{data:data}]);
    }
    if (dataName && dataName.length) {
      setCategories(dataName);
    }
  }, [data, dataName]);

  useEffect(() => {
    setChartHeight(getChartHeight(categories.length));
  }, [categories.length]);

  useEffect(() => {
    setOptions({
      chart: {
        type: "bar",
        height: 350,
        stacked: stacked,
        toolbar:{
          show:false
        },
        offsetY:-15,
        events: {
          dataPointSelection: function (event, chartContext, config) {
            
            const selection=config.w.config.xaxis.categories[config.dataPointIndex]
            if(selection==value) setValue("")
            else setValue(selection)
            // console.log(selection)
          },
        },
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
        // formatter: function (val) {
        //   return (val / 1000000).toFixed(2) + "百萬";
        // },
        offsetX: 10,
        style: {
          fontSize: "18px",
          colors: ["#fbf1ff"],
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
        labels: {
          style: {
            fontSize: "18px",
            colors:"#fff",
          },
          offsetY: 5,
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: "18px",
            colors:"#fff"
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
      },
      states: {
        allowMultipleDataPointsSelection: true,
        filter: {
          type: "darken",
          value: 1,
        },
      },
    });
  }, [categories]);

  return (
    <>
      <TitleTypography title={title} titleColors={titleColors} />
      <Box style={{ height: height, overflow:"auto" }}>
{options ? (
        <Chart
          options={options}
          series={series}
          type="bar"
          height={chartHeight}
          width={"99%"}
        />
      ) : null}
      </Box>
      
    </>
  );
}
