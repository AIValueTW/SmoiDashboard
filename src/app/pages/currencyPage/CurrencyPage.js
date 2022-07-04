import React, { useEffect, useState } from "react";
import * as actions from "../../modules/_redux/DashboardActions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { Card } from "@mui/material";

import MuiCard from "../../Charts/Mui/MuiCard";
import { BarChartYaxisOutSide } from "../../Charts/Apexchart/BarChartYaxisOutSide";

import { MuiAutocomplete } from "../../components/MuiAutocomplete";
import { toTenThousand } from "../../components/toTenThousand";
import { PieChart } from "../../Charts/Nivo/PieChart";
import { CryptoDataGrid } from "./components/CryptoDataGrid";

export function CurrencyPage() {
  const [memberId, setMemberId] = useState("all");
  const [nickName, setNickName] = useState("全部");
  const [collection, setCollection] = useState("all");
  const [item, setItem] = useState([]);
  const [county, setCounty] = useState([]);

  const dispatch = useDispatch();

  const {
    member_crypto_value,
    crypto_member_list,
    member_ranking_by_holding_crypto,
    crypto_ranking,
    someone_crypto_usd,
  } = useSelector(
    (state) => ({
      member_crypto_value: state.dashboard.member_crypto_value,
      crypto_member_list: state.dashboard.crypto_member_list,
      member_ranking_by_holding_crypto: state.dashboard.member_ranking_by_holding_crypto,
      crypto_ranking: state.dashboard.crypto_ranking,
      someone_crypto_usd: state.dashboard.someone_crypto_usd,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.get_member_crypto_value({ member_id: memberId }));
    dispatch(actions.get_crypto_member_list());
    dispatch(actions.get_member_ranking_by_holding_crypto());
     dispatch(actions.get_crypto_ranking({ member_id: memberId }));
    dispatch(actions.get_someone_crypto_usd({ member_id: memberId }));
  }, [memberId]);

  return (
    <>
      <Container maxWidth="false">
        <Grid container spacing={2}>
          <Grid item xs={4.5}>
            <Card
              sx={{ height: "17vh", fontSize: "1.5vw", bgcolor: "#FC8822" }}
            >
              <MuiAutocomplete
                inputValue={nickName}
                setInputValue={setNickName}
                nickName={crypto_member_list?.nickname || []}
                memberId={crypto_member_list?.id || []}
                setCollection={setCollection}
                setValue={setMemberId}
              />
            </Card>
          </Grid>

          <Grid item xs={2.5}>
            <MuiCard
              height={"17vh"}
              title={ "幣種數量"}
              value={
               member_crypto_value?.count||""
              }
              cardColor={"#3e51cc"}
              titleColor={"#ffffff"}
              valueColor={"#FFF86B"}
            />
          </Grid>
          <Grid item xs={2.5}>
            <MuiCard
              height={"17vh"}
              title={"總價值(ETH)"}
              value={
                member_crypto_value?toTenThousand(member_crypto_value.ethBalance):""
              }
              cardColor={"#3e51cc"}
              titleColor={"#ffffff"}
              valueColor={"#FFF86B"}
            />
          </Grid>
          <Grid item xs={2.5}>
            <MuiCard
              height={"17vh"}
              title={"總價值(美金)"}
              value={
                member_crypto_value?.usd||""
              }
              cardColor={"#3e51cc"}
              titleColor={"#ffffff"}
              valueColor={"#FFF86B"}
            />
          </Grid>

          <Grid item xs={3}>
            <Card raised={true} sx={{ height: "70vh" }}>
              <Card raised={true} sx={{ height: "90vh"}}>
                <BarChartYaxisOutSide
                  data={member_ranking_by_holding_crypto?.count || []}
                  dataName={member_ranking_by_holding_crypto?.nickname || []}
                  title={"持有幣種數量"}
                  titleColors={"#FF6B3A"}
                  colors={["#FF6B3A"]}
                  height={"75%"}
                  stacked={false}
                  distributed={true}
                  value={nickName}
                  setValue={setNickName}
                />
              </Card>
            </Card>
          </Grid>

          <Grid item xs={3}>
            <Card raised={true} sx={{ height: "70vh" }}>
            <CryptoDataGrid
                rows={crypto_ranking ? crypto_ranking : {}}
                title={"熱門持有"}
                  titleColors={"#8665FF"}
                setValue={setCollection}
              />
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card raised={true} sx={{ height: "70vh" }}>
            {/* <Card raised={true} sx={{ height: "43.5vh", color: "#fed0d0" }}> */}
                <PieChart
                  data={someone_crypto_usd?someone_crypto_usd : []}
                  title={"幣種分布"}
                  titleColors={"#3C6BEC"}
                  // colors={["#f73d31", "#fb814e", "#fbd4b5", "#f7918a"]}
                  colors={{ scheme: 'set3' }}
                  height={"90%"}
                  textColor={"#fff"}
                  setValue={setCounty}
                />
              {/* </Card> */}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
