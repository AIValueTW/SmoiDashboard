import axios from "axios";

const loginIp = process.env.REACT_APP_SERVER;// 閱讀最外層檔案.env &&development 為本地端啟動 production 為伺服器設定

const ip = "https://samoi.aiv.com.tw/dashboard-api"

//總覽
export const get_gender_ratio = () => {
  let data = axios.get(ip + "/gender_ratio/");
  return data;
};

export const get_city_ratio = () => {
  let data = axios.get(ip + "/city_ratio/");
  return data;
};

export const get_card_data = () => {
  let data = axios.get(ip + "/cards_data/");
  return data;
};

export const get_collection_ranking = () => {
  let data = axios.get(ip + "/collection_ranking/");
  return data;
};

export const get_member_ranking_by_total_usd = () => {
  let data = axios.get(ip + "/member_ranking_by_total_usd/");
  return data;
};

//NFT占比
export const get_member_nft_value = (member_id) => {
  let data = axios.get(ip + "/member_nft_value/?member_id=" + member_id);
  return data;
};

export const get_member_ranking_by_holding_nfts = () => {
  let data = axios.get(ip + "/member_ranking_by_holding_nfts/");
  return data;
};

export const get_nft_member_list = () => {
  let data = axios.get(ip + "/nft_member_list/");
  return data;
};


export const get_someone_collections = (member_id) => {
  let data = axios.get(ip + "/someone_collections/?member_id=" + member_id);
  return data;
};

export const get_someone_collection_items = (member_id, collection) => {
  let data = axios.get(ip + "/someone_collection_items/?member_id=" + member_id + "&collection=" + collection);
  return data;
};

//所有幣種
export const get_crypto_member_list = () => {
  let data = axios.get(ip + "/crypto_member_list/");
  return data;
};

export const get_member_ranking_by_holding_crypto = () => {
  let data = axios.get(ip + "/member_ranking_by_holding_crypto/");
  return data;
};

export const get_crypto_ranking = (member_id) => {
  let data = axios.get(ip + "/crypto_ranking/?member_id=" + member_id);
  return data;
};

export const get_someone_crypto_usd = (member_id) => {
  let data = axios.get(ip + "/someone_crypto_usd/?member_id=" + member_id);
  return data;
};

export const get_member_crypto_value = (member_id) => {
  let data = axios.get(ip + "/member_crypto_value/?member_id=" + member_id);
  return data;
};