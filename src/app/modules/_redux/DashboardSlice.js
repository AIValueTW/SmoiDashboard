import { createSlice } from "@reduxjs/toolkit";

const initialDashboardState = {
  actionsLoading: false,
  //總覽
  gender_ratio: undefined,
  city_ratio: undefined,
  card_data: undefined,
  collection_ranking: undefined,
  member_ranking_by_total_usd: undefined,
  //NFT占比
  member_nft_value:undefined,
  member_ranking_by_holding_nfts: undefined,
  nft_member_list: undefined,
  someone_collections:undefined,
  someone_collection_items:undefined,
  //所有幣種
  crypto_member_list:undefined,
  member_ranking_by_holding_crypto: undefined,
  crypto_ranking: undefined,
  someone_crypto_usd:undefined,
  member_crypto_value:undefined
};
export const callTypes = {
  action: "action",
};

export const DashboardSlice = createSlice({
  name: "dashborad",
  initialState: initialDashboardState,
  reducers: {
    //總覽
    set_gender_ratio: (state, action) => {
      state.gender_ratio = action.payload.gender_ratio;
    },
    set_city_ratio: (state, action) => {
      state.city_ratio = action.payload.city_ratio;
    },
    set_card_data: (state, action) => {
      state.card_data = action.payload.card_data;
    },
    set_collection_ranking: (state, action) => {
      state.collection_ranking = action.payload.collection_ranking;
    },
    set_member_ranking_by_total_usd: (state, action) => {
      state.member_ranking_by_total_usd = action.payload.member_ranking_by_total_usd;
    },
    //NFT占比
    set_member_nft_value: (state, action) => {
      state.member_nft_value = action.payload.member_nft_value;
    },
    set_member_ranking_by_holding_nfts: (state, action) => {
      state.member_ranking_by_holding_nfts = action.payload.member_ranking_by_holding_nfts;
    },
    set_nft_member_list: (state, action) => {
      state.nft_member_list = action.payload.nft_member_list;
    },
    set_someone_collections: (state, action) => {
      state.someone_collections = action.payload.someone_collections;
    },
    set_someone_collection_items: (state, action) => {
      state.someone_collection_items = action.payload.someone_collection_items;
    },
    //所有幣種
    set_crypto_member_list: (state, action) => {
      state.crypto_member_list = action.payload.crypto_member_list;
    },
    set_member_ranking_by_holding_crypto: (state, action) => {
      state.member_ranking_by_holding_crypto = action.payload.member_ranking_by_holding_crypto;
    },
    set_crypto_ranking: (state, action) => {
      state.crypto_ranking = action.payload.crypto_ranking;
    },
    set_someone_crypto_usd: (state, action) => {
      state.someone_crypto_usd = action.payload.someone_crypto_usd;
    },
    set_member_crypto_value: (state, action) => {
      state.member_crypto_value = action.payload.member_crypto_value;
    },
  },
});
