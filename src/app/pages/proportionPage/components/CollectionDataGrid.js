import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LinkIcon from '@mui/icons-material/Link';

const other = {
  // autoHeight: true,
  showCellRightBorder: true,
  showColumnRightBorder: true,
};

export function CollectionDataGrid({ rows,setValue }) {

  return (
    <>
      <Box
        sx={{
          width: 1,
          height:"100%",
          "& .color-header": {
            backgroundColor: "#ff7900",
            fontSize: "2.5vmin",
          },
          overflow:false
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          getRowHeight={() => 'auto'} 
          onCellClick={(params, event) => {
            if (!event.ctrlKey) {
              setValue(params.row.info.collectionName)
            }
          }}
          onCellDoubleClick={(params, event) => {
            const openInNewTab = url => {
              window.open(url, '_blank', 'noopener,noreferrer');
            };
            let webside=params.value.collectionWebSite
            if (!event.ctrlKey) {
              // console.log(params)
              openInNewTab(webside)
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
    field: "info",
    headerClassName: "color-header",
    headerName: "Collection", 
    flex: 1,
    // minWidth: 440,
    headerAlign: 'center' ,
    renderCell: (params) => {
    let  url=params.value.collectionWebSite
      return (
        <>
          <Avatar src={params.value.collectionImageUrl}  sx={{ width: 100, height: 100 ,m:1}} variant="rounded" />
          <IconButton
            color="warning"
            aria-label="upload picture"
            component="span"
            onClick={()=>{
              window.open(url, '_blank', 'noopener,noreferrer')
            }}
          >
            <LinkIcon />
          </IconButton>
          <Box sx={{ml:0.5,fontSize:"20px"}}>{params.value.collectionName}</Box>
         
        </>
      );
    },
  },
  {
    field: "count",
    headerClassName: "color-header",
    headerName: "NFT",
    type: 'number', 
    flex: 0.3,
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

