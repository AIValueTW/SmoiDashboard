import React from "react";

import { Provider } from "react-redux";
import { styled } from "@mui/system";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
// import { OverviewPage } from "./page/overview/OverviewPage";
// import { YearPage } from "./page/year/YearPage";
import { MaterialThemeProvider } from "../_core/MaterialThemeProvider ";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import {  CssBaseline, Typography } from "@mui/material";
// import { MyCardPointsPage } from "../../page/add-value/MyCardPointsPage";
import { OverviewPage } from "../../pages/overviewPage/OverviewPage";
import { NFTProportionPage } from "../../pages/proportionPage/NFTProportionPage";
import { CurrencyPage } from "../../pages/currencyPage/CurrencyPage";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};
const Title = styled(Typography)`
  font-size: 2vw;
  font-weight: 600;
  margin: 0px 18px;
  color: #ff9016;
  text-shadow: 2px 2px 3px #444445;
`;

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 1.5vw;
  font-weight: 600;
  background-color: transparent;
  width: 10%;
  padding: 1.2vmin 1vmin;
  margin: 0px 0px;
  margin-top: 1vh;
  margin-bottom: 1vh;
  border: none;
  border-radius: 0px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #121212;
    color:#fa7721;
    font-weight: 600;
    border-radius: 8px 8px 8px 8px;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    color: #fff;
    outline: none;
    background-color: ${blue[200]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #fff;
    color: #000;
    font-weight: 600;
    border-radius: 8px 8px 8px 8px;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  height: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 1vmin 5px;
  margin: 2px 0px;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 100%;
  background-color: #121212;
  border-radius: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-content: space-between;
`;

export default function SimpleTabs({ store }) {
  return (
    <Provider store={store}>
      <TabsUnstyled defaultValue={1}>
        <TabsList>
          <Title>沙漠魚會員分析Dashboard</Title>
          {/* <Title>AIV活動後台DASHBOARD</Title> */}
          <Tab>總覽</Tab>
          <Tab>NFT占比</Tab>
          <Tab>所有幣種</Tab>
        </TabsList>

        <MaterialThemeProvider>
          <CssBaseline />
          <TabPanel value={1}>
            <OverviewPage/>
          </TabPanel>
          <TabPanel value={2}>
          <NFTProportionPage/>
          </TabPanel>
          <TabPanel value={3}>
          <CurrencyPage/>
          </TabPanel>
        </MaterialThemeProvider>
      </TabsUnstyled>
    </Provider>
  );
}
