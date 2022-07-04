import React, { useEffect, useState } from "react";
import * as actions from "../../modules/_redux/DashboardActions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { Card, Stack } from "@mui/material";

import { PieChart } from "../../Charts/Nivo/PieChart";
import MuiCard from "../../Charts/Mui/MuiCard";
import { BarChartYaxisOutSide } from "../../Charts/Apexchart/BarChartYaxisOutSide";
import { NFTRichDataGrid } from "./components/NFTRichDataGrid";
import { toTenThousand } from "../../components/toTenThousand";

export function OverviewPage() {
  const [county, setCounty] = useState([]);
  const [gender, setGender] = useState([]);
  const [nickName, setNickName] = useState([]);
  const [collection, setCollection] = useState([]);

  const dispatch = useDispatch();

  const {
    gender_ratio,
    city_ratio,
    card_data,
    collection_ranking,
    member_ranking_by_total_usd,
  } = useSelector(
    (state) => ({
      gender_ratio: state.dashboard.gender_ratio,
      city_ratio: state.dashboard.city_ratio,
      card_data: state.dashboard.card_data,
      collection_ranking: state.dashboard.collection_ranking,
      member_ranking_by_total_usd: state.dashboard.member_ranking_by_total_usd,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.get_gender_ratio());
    dispatch(actions.get_city_ratio());
    dispatch(actions.get_card_data());
    dispatch(actions.get_collection_ranking());
    dispatch(actions.get_member_ranking_by_total_usd());
  }, []);

  return (
    <>
      <Container maxWidth="false">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Stack spacing={2}>
              <Card raised={true} sx={{ height: "43.5vh", color: "#fed0d0" }}>
                <PieChart
                  data={city_ratio?city_ratio : []}
                  title={"縣市比"}
                  titleColors={""}
                  colors={["#f73d31", "#fb814e", "#fbd4b5", "#f7918a"]}
                  height={"90%"}
                  textColor={"#fff"}
                  setValue={setCounty}
                />
              </Card>
              <Card raised={true} sx={{ height: "43.5vh", color: "#f9dd6f" }}>
                <PieChart
                  data={gender_ratio?gender_ratio : []}
                  title={"男女比"}
                  titleColors={""}
                  colors={["#f8c7fd","#95cdd1" ]}
                  height={"90%"}
                  textColor={"#362c6f"}
                  setValue={setGender}
                />
              </Card>
            </Stack>
          </Grid>

          <Grid item container xs={9} spacing={2} alignItems="stretch">
            <Grid item xs={3}>
              <MuiCard
                height={"19vh"}
                title={card_data?card_data[0].title:''}
                value={card_data?card_data[0].value:''}
                cardColor={"#f5644d"}
                titleColor={"#252423"}
                valueColor={"#252423"}
              />
            </Grid>
            <Grid item xs={3}>
              <MuiCard
                height={"19vh"}
                title={card_data?card_data[1].title:''}
                value={card_data?toTenThousand(card_data[1].value):''}
                cardColor={"#f5644d"}
                titleColor={"#252423"}
                valueColor={"#252423"}
              />
            </Grid>
            <Grid item xs={3}>
              <MuiCard
                height={"19vh"}
                title={card_data?card_data[2].title:''}
                value={card_data?toTenThousand(card_data[2].value):''}
                cardColor={"#f5644d"}
                titleColor={"#252423"}
                valueColor={"#252423"}
              />
            </Grid>
            <Grid item xs={3}>
              <MuiCard
                height={"19vh"}
                title={card_data?card_data[3].title:''}
                value={card_data?toTenThousand(card_data[3].value):''}
                cardColor={"#f5644d"}
                titleColor={"#252423"}
                valueColor={"#252423"}
              />
            </Grid>
            <Grid item xs={7.5}>
              <Card raised={true} sx={{ height: "68vh" }}>
                <NFTRichDataGrid
                rows={member_ranking_by_total_usd?member_ranking_by_total_usd:{}}
                  title={"錢包"}
                  titleColors={"#f7b2bc"}
                  setValue={setNickName}
                />
              </Card>
            </Grid>
            <Grid item xs={4.5}>
              <Card raised={true} sx={{ height: "68vh" }}>
                <Card raised={true} sx={{ height: "90vh" }}>
                  <BarChartYaxisOutSide
                    data={collection_ranking?.count.slice(0,19)  || []}
                    dataName={collection_ranking?.collectionName.slice(0,19) || []}
                    title={"持有Collection排行"}
                    titleColors={"#ff81a2"}
                    colors={["#e7274e", "#fe5f76"]}
                    height={"75%"}
                    stacked={false}
                    distributed={true}
                    setValue={setCollection}
                  />
                </Card>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
