import React, { useEffect, useState } from "react";
import * as actions from "../../modules/_redux/DashboardActions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { Card } from "@mui/material";

import MuiCard from "../../Charts/Mui/MuiCard";
import { BarChartYaxisOutSide } from "../../Charts/Apexchart/BarChartYaxisOutSide";
import { CollectionDataGrid } from "./components/CollectionDataGrid";
import { ETHDataGrid } from "./components/ETHDataGrid";
import { MuiAutocomplete } from "../../components/MuiAutocomplete";
import { toTenThousand } from "../../components/toTenThousand";

export function NFTProportionPage() {
  const [memberId, setMemberId] = useState("all");
  const [nickName, setNickName] = useState("全部");
  const [collection, setCollection] = useState("all");
  const [item, setItem] = useState([]);

  const dispatch = useDispatch();

  const {
    card_data,
    member_nft_value,
    member_ranking_by_holding_nfts,
    nft_member_list,
    someone_collections,
    someone_collection_items,
  } = useSelector(
    (state) => ({
      card_data: state.dashboard.card_data,
      member_nft_value: state.dashboard.member_nft_value,
      member_ranking_by_holding_nfts:
        state.dashboard.member_ranking_by_holding_nfts,
      nft_member_list: state.dashboard.nft_member_list,
      someone_collections: state.dashboard.someone_collections,
      someone_collection_items: state.dashboard.someone_collection_items,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.get_card_data());
    dispatch(actions.get_member_nft_value({ member_id: memberId }));
    dispatch(actions.get_member_ranking_by_holding_nfts());
    dispatch(actions.get_nft_member_list());
    dispatch(actions.get_someone_collections({ member_id: memberId }));
    dispatch(
      actions.get_someone_collection_items({
        member_id: memberId,
        collection: collection,

      })
    );
  }, [memberId, collection]);

  return (
    <>
      <Container maxWidth="false">
        <Grid container spacing={2}>
          <Grid item xs={4.5}>
            <Card
              sx={{ height: "17vh", fontSize: "1.5vw", bgcolor: "#717bc5" }}
            >
              <MuiAutocomplete
                inputValue={nickName}
                setInputValue={setNickName}
                nickName={nft_member_list?.nickname || []}
                memberId={nft_member_list?.id || []}
                setCollection={setCollection}
                setValue={setMemberId}
              />
            </Card>
          </Grid>

          <Grid item xs={2.5}>
            <MuiCard
              height={"17vh"}
              title={card_data ? card_data[4].title : ""}
              value={
                !(card_data && member_nft_value)
                  ? ""
                  : member_nft_value.id == "all"
                    ? card_data[4].value
                    : member_nft_value.count + "／" + card_data[4].value
              }
              cardColor={"#51369f"}
              titleColor={"#ffffff"}
              valueColor={"#abfaff"}
            />
          </Grid>
          <Grid item xs={2.5}>
            <MuiCard
              height={"17vh"}
              title={card_data ? card_data[5].title : ""}
              value={
                member_nft_value
                  ? toTenThousand(member_nft_value.ethBalance)
                  : ""
              }
              cardColor={"#51369f"}
              titleColor={"#ffffff"}
              valueColor={"#abfaff"}
            />
          </Grid>
          <Grid item xs={2.5}>
            <MuiCard
              height={"17vh"}
              title={card_data ? card_data[6].title : ""}
              value={
                member_nft_value ? toTenThousand(member_nft_value.usd) : ""
              }
              cardColor={"#51369f"}
              titleColor={"#ffffff"}
              valueColor={"#abfaff"}
            />
          </Grid>

          <Grid item xs={3}>
            <Card raised={true} sx={{ height: "70vh" }}>
              <Card raised={true} sx={{ height: "90vh", bgcolor: "#362f73" }}>
                <BarChartYaxisOutSide
                  data={member_ranking_by_holding_nfts?.count || []}
                  dataName={member_ranking_by_holding_nfts?.nickname || []}
                  title={"持有NFT數量"}
                  titleColors={"#90d4d8"}
                  colors={["#90d4d8"]}
                  height={"75%"}
                  stacked={false}
                  distributed={true}
                  value={nickName}
                  setValue={setNickName}
                />
              </Card>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card raised={true} sx={{ height: "70vh" }}>
              <CollectionDataGrid
                rows={someone_collections ? someone_collections : {}}
                setValue={setCollection}
              />
            </Card>
          </Grid>

          <Grid item xs={5}>
            <Card raised={true} sx={{ height: "70vh" }}>
              {/* <ETHTable
                data={
                  (donate_information &&
                    donate_information.price_vs_payfee?.details) ||
                  []
                }
                titleColors={"#ff7900"}
                 setValue={setItem}
              /> */}
              <ETHDataGrid
                rows={someone_collection_items ? someone_collection_items : {}}
                setValue={setItem}
              />
              {/* <ETHImageList/> */}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
