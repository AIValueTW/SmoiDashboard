import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LinkIcon from '@mui/icons-material/Link';
import { TitleTypography } from "../../../Charts/Mui/TitleTypography";

const other = {
  // autoHeight: true,
  showCellRightBorder: true,
  showColumnRightBorder: true,
};

export function CryptoDataGrid({ rows,title, titleColors,setValue }) {
console.log(rows)
  return (
    <>
    <TitleTypography title={title} titleColors={titleColors} />
      <Box
        sx={{
          width: 1,
          height:"100%",
          "& .color-header": {
            backgroundColor: "#503CD5",
            fontSize: "2vmin",
          },
          overflow:false
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          getRowHeight={() => 'auto'} 
          // onCellClick={(params, event) => {
          //   if (!event.ctrlKey) {
          //     setValue(params.row.info.collectionName)
          //   }
          // }}
          // onCellDoubleClick={(params, event) => {
          //   const openInNewTab = url => {
          //     window.open(url, '_blank', 'noopener,noreferrer');
          //   };
          //   let webside=params.value.collectionWebSite
          //   if (!event.ctrlKey) {
          //     // console.log(params)
          //     openInNewTab(webside)
          //   }
          // }}
          {...other}
        />
      </Box>
    </>
  );
}

const columns = [
  
  {
    field: "info",
    headerClassName: "color-header",
    headerName: "貨幣", 
    flex: 1,
    // minWidth: 440,
    headerAlign: 'center' ,
    renderCell: (params) => {
    let  url=params.value.collectionWebSite
      return (
        <>
          <Avatar src={params.value.imageUrl}  sx={{ width: 60, height: 60 ,m:2}} variant="rounded" />
          {/* <IconButton
            color="warning"
            aria-label="upload picture"
            component="span"
            onClick={()=>{
              window.open(url, '_blank', 'noopener,noreferrer')
            }}
          >
            <LinkIcon />
          </IconButton> */}
          {/* <Box sx={{ml:0.5,fontSize:"20px"}}>{params.value.name}</Box> */}
          <Box sx={{ml:0.5,fontSize:"20px"}}>{params.value.symbol}</Box>
        </>
      );
    },
  },
  {
    field: "count",
    headerClassName: "color-header",
    headerName: "數量",
    type: 'number', 
    flex: 0.5,
    headerAlign: 'center' ,
    renderCell: (params) => {
      return (
        <>
          <Box sx={{ml:2,fontSize:"20px"}}>{params.value}</Box>
        </>
      );
    },
  },
];

