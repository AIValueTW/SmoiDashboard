import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { ResponsivePie } from "@nivo/pie";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { TitleTypography } from "../Mui/TitleTypography";

export function PieChart({ data, title,titleColors, colors, height,textColor ,setValue}) {
  const [pieData, setPieData] = useState([{ id: "" }]);

  useEffect(() => {
    if (data.length) {
      setPieData(data);
    } else {
      setPieData([{ id: "無資料", value: 1 }]);
    }
  }, [data]);

  function OnClickPie(node){
    setValue(node.id)
  }

  return (
    <>
        {/* <Box
          style={{
            background: "linear-gradient(to right , #000113, #020f77)",
            padding: "4px",
          }}
        >
          <Title>{title}</Title>
        </Box> */}
        <TitleTypography title={title} titleColors={titleColors}/>
        <Box style={{ height: height}}>
          <ResponsivePie
            data={pieData}
            sortByValue={true}
            margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
            // startAngle={data.length === 1 ? 270 : 0}
            // startAngle={-70}
            // endAngle={-360}
            innerRadius={data.length <= 2 ? 0 : 0}
            activeOuterRadiusOffset={3}
            onClick={OnClickPie}
            colors={
              colors && pieData[0].id !== "無資料"
                ? colors
                : pieData[0].id == "無資料"
                ? "#aeaeae"
                : { scheme: "purple_orange" }
            }
            borderWidth={1}
            borderColor={{ from: "color", modifiers: [["brighter", 3]] }}
            // arcLinkLabel={function (e) {
            //   return e.id + "－" + e.value;
            // }}
            arcLinkLabelsTextColor={{ from: "color", modifiers: [] }}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLinkLabelsDiagonalLength={10}
            arcLinkLabelsStraightLength={10}
            arcLabelsRadiusOffset={data.length <= 2 ? 0.5 : 0.58}
            arcLinkLabelsSkipAngle={10}
            arcLabelsSkipAngle={15}
            arcLabel="id"
            arcLabelsTextColor={textColor}
            enableArcLinkLabels={pieData[0].id == "無資料" ? false : true}
            arcLinkLabel={function(e){return e.value}}
            theme={
              data.length <= 3
                ? {
                    fontSize: "1.7vmin",
                  }
                : {
                    fontSize: "1.7vmin",
                  }
            }
            isInteractive={true}
          //   legends={[
          //     {
          //       anchor: 'bottom',
          //       direction: 'row',
          //       justify: false,
          //       translateX: 0,
          //       translateY: 30,
          //       itemsSpacing: 30,
          //       itemWidth: 60,
          //       itemHeight: 10,
          //       itemTextColor: '#999',
          //       itemDirection: 'left-to-right',
          //       itemOpacity: 1,
          //       symbolSize: 15,
          //       symbolShape: 'circle',
          //       effects: [
          //           {
          //               on: 'hover',
          //               style: {
          //                   itemTextColor: '#000'
          //               }
          //           }
          //       ]
          //     }
          // ]}
          />
        </Box>

    </>
  );
}
