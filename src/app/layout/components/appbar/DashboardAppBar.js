import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
const drawerWidth = 260;

export function GoMonthAppBar({ value, setValue }) {
  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        height:"3em",
        backgroundColor:"#323232",
        color:"#fff"
      }}
    >
      <Toolbar sx={{bottom:"0.5em"}}>
        <Typography  component="div" sx={{fontSize:"2.3vmin"}}>
          Dashboard - {value === "date" ? "每天" : "月總量"}
        </Typography>
        {value === "date" ? (
          <Button
            onClick={() => {
              setValue("month");
            }}
            variant="contained"
            color="secondary"
            sx={{ ml: 2,fontWeight:"bold",fontSize:"1.5vmin"}}
          >
            Go to 月總量
          </Button>
        ) : (
          <Button
            onClick={() => {
              setValue("date");
            }}
            variant="contained"
            color="secondary"
            sx={{ ml: 2 ,fontWeight:"bold",fontSize:"1.5vmin"}}
          >
            <ArrowCircleLeftOutlinedIcon sx={{ mr: 1 }} />
            回上一頁
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export function MonthAppBar() {
  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        height:"3em",
        backgroundColor:"#323232",
        color:"#fff"
      }}
    >
      <Toolbar sx={{bottom:"0.5em"}}>
        <Typography  component="div" sx={{fontSize:"2.3vmin"}}>
          Dashboard - 月總量
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export function DashboardAppBar() {
  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        height:"3em",
        backgroundColor:"#323232",
        color:"#fff"
      }}
    >
      <Toolbar sx={{bottom:"0.5em"}}>
        <Typography  component="div" sx={{fontSize:"2.3vmin"}}>
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
