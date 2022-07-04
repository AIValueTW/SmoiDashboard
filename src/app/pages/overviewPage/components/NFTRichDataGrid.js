import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from "@mui/x-data-grid-generator";
import { TitleTypography } from "../../../Charts/Mui/TitleTypography";
import { Box } from "@mui/material";

const other = {
  autoHeight: true,
  showCellRightBorder: true,
  showColumnRightBorder: true,
};

export function NFTRichDataGrid({ rows, title, titleColors, setValue }) {
  return (
    <>
      <TitleTypography title={title} titleColors={titleColors} />
      <Box
        sx={{
          height: 300,
          width: 1,
          "& .color-header": {
            backgroundColor: "#de5f5f",
            fontSize: "2vmin",
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          onCellClick={(params, event) => {
            if (!event.ctrlKey) {
              setValue(params.row.nickname);
            }
          }}
          {...other}
        />
      </Box>
    </>
  );
}

const columns = [
  {
    field: "ranking",
    headerClassName: "color-header",
    headerName: "排名",
    headerAlign: "center",
    type: "number",
    flex: 0.2,
    renderCell: (params) => {
      return (
        <>
          <Box sx={{ fontSize: "19px" }}>{params.value}</Box>
        </>
      );
    },
  },
  {
    field: "nickname",
    headerClassName: "color-header",
    headerName: "人名",
    headerAlign: "center",
    flex: 1,
    renderCell: (params) => {
      return (
        <>
          <Box sx={{fontSize: "19px" }}>{params.value}</Box>
        </>
      );
    },
  },
  {
    field: "ethBalance",
    headerClassName: "color-header",
    headerName: "以太幣(顆數)",
    headerAlign: "center",
    flex: 0.5,
    renderCell: (params) => {
      return (
        <>
          <Box sx={{ fontSize: "19px" }}>{params.value}</Box>
        </>
      );
    },
  },
  {
    field: "ethBalance_usd",
    headerClassName: "color-header",
    headerName: "總價值(美金)",
    headerAlign: "center",
    flex: 0.5,
    renderCell: (params) => {
      return (
        <>
          <Box sx={{ fontSize: "19px" }}>{params.value}</Box>
        </>
      );
    },
  },
];

// const rows = [
//     { id: 1, col1: 'Hello', col2: 'World',col3:'ETH' },
//     { id: 2, col1: 'DataGridPro', col2: 'is Awesome',col3:'ETH' },
//     { id: 3, col1: 'MUI', col2: 'is Amazing',col3:'ETH' }

// ];
