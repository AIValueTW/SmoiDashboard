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

export function ETHDataGrid({ rows, setValue }) {
  console.log(rows)
  return (
    <>
      <Box
        sx={{
          width: 1,
          height: "100%",
          "& .color-header": {
            backgroundColor: "#e74000",
            fontSize: "2.5vmin",
          },
          overflow: true,
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          getRowHeight={() => "auto"}
          onCellClick={(params, event) => {
            if (!event.ctrlKey) {
              setValue(params.row.item);
            }
          }}
          onCellDoubleClick={(params, event) => {
            const openInNewTab = (url) => {
              window.open(url, "_blank", "noopener,noreferrer");
            };
            if (!event.ctrlKey) {
              // openInNewTab('https://yahoo.com.tw')
            }
            // console.log(params.row.itemWebSite)
            let webside = params.row.itemWebSite;
            if (!event.ctrlKey) {
              openInNewTab(webside);
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
    field: "item_name",
    headerClassName: "color-header",
    headerName: "Item",
    minWidth: 270,
    flex: 1,
    headerAlign: "center",
    renderCell: (params) => {
      let  url=params.row.itemWebSite
      return (
        <>
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
          <Box sx={{ overflowX: "clip", ml: 0.5, fontSize: "20px" }}>
            {params.value}
          </Box>
         
        </>
      );
    },
  },
  {
    field: "imageUrl",
    headerName: "Image",
    headerClassName: "color-header",
    minWidth: 290,
    // flex: 1,
    headerAlign: "center",
    renderCell: (params) => {
      return (
        <>
          <Avatar
            src={params.value}
            sx={{ width: "100%", height: "100%" }}
            variant="rounded"
          />
        </>
      );
    },
  },

  {
    field: "ethBalance",
    headerClassName: "color-header",
    headerName: "ETH",
    flex: 1,
    headerAlign: "center",
    renderCell: (params) => {
      return (
        <>
          <Box sx={{ ml: 2, fontSize: "20px" }}>{params.value} ETH</Box>
        </>
      );
    },
    type: "number",
  },
  // {
  //   field: "col4",
  //   headerClassName: "color-header",
  //   headerName: ".",
  //   width: 140,
  //   renderCell: (params) => {
  //     console.log(params);
  //     return (
  //       <>
  //         ETH
  //       </>
  //     );
  //   },
  // },
];

// const rows = [
//   {
//     id: 1,
//     item: "Crazy Lizard Army #880",
//     image:
//         "https://lh3.googleusercontent.com/d1eEcyYeqdKdu055SbieNUSpI_9zzuhQ-g9wYId91V6BljVdCCpWQGVJXP-jyWiMf3r7De0je5ZqAmRNaICN0-pKFHl7fpXsiNryvtA=w600",

//     eth: "1.75",
//   },
//   {
//     id: 2,
//     item: "Crazy Lizard Army #1755",
//     image:
//         "https://lh3.googleusercontent.com/nuUBOSR0ac6GwTs3ZEUXeMzdOLxCIHy6S1VDYLPLuLFhe9Lvn01qbr9-WgnZqImrcG_Y8JMmWdQkS8LrKfhOmYQ-OTehkoH-MogPVw=w600",

//     eth: "1.65",
//   },
//   {
//     id: 3,
//     item: "Crazy Lizard Army #1133",
//     image:
//         "https://lh3.googleusercontent.com/R5QTso3CKtvuTQilnr1Lm_VsstzbDofFjLeRD9EN2vYzMA5TAieyPTGpP1yGegcpDCZWkNHmvsBOKMrzndi8batjejFO254v5Ic-=w600",

//     eth: "1.50",
//   },
//   {
//     id: 4,
//     item: "Crazy Lizard Army #1869",
//     image:
//         "https://lh3.googleusercontent.com/HftscurRv8ZRHCwdbnE-d8-p_sc5L5Wbw-I8k-NExLIsTa0rNCNsLqYCpzBisccU-cLkPZtmpqAW9JGcTS5SG8LPBU7pTyPhas7ryw=w600",

//     eth: "0.80",
//   },
//   {
//     id: 5,
//     item: "Crazy Lizard Army #5259",
//     image:
//         "https://lh3.googleusercontent.com/rAm7aXpZzv0UG6XHQFpNCEpoNkFYMNWjAgL-M6v0eYWba-vOE_hae9YdjNN8Yvpu75PFtUiZQOb_DHIfAqHW3TRRpA8K-WAFLapr=w600",

//     eth: "0.70",
//   },
// ];
