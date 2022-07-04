import React, { useState, useEffect } from "react";
import * as actions from "../modules/_redux/DashboardActions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Card, CardContent, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { TitleTypography } from "../Charts/Mui/TitleTypography";

function toIntDate(dateStr) {
  return new Date(dateStr).getTime();
}

export function RangeSlider({ titleColors, setRangeDate }) {
  const [sliderValue, setSliderValue] = useState([null, null]);
  const [rangeValue, setRangeValue] = useState([null, null]);

  const dispatch = useDispatch();

  const { defaultDate } = useSelector(
    (state) => ({
      defaultDate: state.dashboard.defaultDate,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (!defaultDate) {
      dispatch(actions.getDefaultDate());
    }
  }, []);

  useEffect(() => {
    if (
      defaultDate &&
      !(rangeValue[0] && rangeValue[1]) &&
      !(sliderValue[0] && sliderValue[1])
    ) {
      setRangeValue([new Date(new Date(defaultDate.end).setMonth(new Date(defaultDate.end).getMonth()-3)), new Date(defaultDate.end)]); //初始日期範圍
    }
  }, [defaultDate, rangeValue]);

  useEffect(() => {
    if (rangeValue[0] && rangeValue[1]) {
      setSliderValue([toIntDate(rangeValue[0]), toIntDate(rangeValue[1])]);
      setRangeDate([
        ...rangeValue[0].toISOString().split("T", 1),
        ...rangeValue[1].toISOString().split("T", 1),
      ]);
    }
  }, [rangeValue]);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
    setRangeValue([new Date(newValue[0]), new Date(newValue[1])]);
  };

  return (
    <Card sx={{ width: "100%", height: "8em" }}>
      <TitleTypography title={"日期拉條"} titleColors={titleColors} />
      {/* <CardContent> */}
      <Box sx={{ m: 1.5 }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            startText="起始日期"
            endText="結束日期"
            minDate={new Date(defaultDate?.start)}
            maxDate={new Date(defaultDate?.end)}
            value={rangeValue}
            onChange={(newValue) => {
              setRangeValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField  size="small" {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField size="small" {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
      </Box>
      <Box sx={{ margin: "1vh 2.6vh", width: "95%" }}>
        <Slider
          value={sliderValue}
          onChange={handleChange}
          step={86400000}
          min={toIntDate(defaultDate?.start)}
          max={toIntDate(defaultDate?.end)}
        />
      </Box>
      {/* </CardContent> */}
    </Card>
  );
}
