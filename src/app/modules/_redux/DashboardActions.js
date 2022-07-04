import * as dashboardAPI from "./DashboardCrud.js";
import { DashboardSlice } from "./DashboardSlice";

const { actions } = DashboardSlice;

//總覽
export const get_gender_ratio = () => (dispatch) => {
  return dashboardAPI
    .get_gender_ratio()
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_gender_ratio({
          gender_ratio: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_city_ratio = () => (dispatch) => {
  return dashboardAPI
    .get_city_ratio()
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_city_ratio({
          city_ratio: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_card_data = () => (dispatch) => {
  return dashboardAPI
    .get_card_data()
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_card_data({
          card_data: DashboardData.data,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_collection_ranking = () => (dispatch) => {
  return dashboardAPI
    .get_collection_ranking()
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_collection_ranking({
          collection_ranking: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_member_ranking_by_total_usd = () => (dispatch) => {
  return dashboardAPI
    .get_member_ranking_by_total_usd()
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_member_ranking_by_total_usd({
          member_ranking_by_total_usd: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

//NFT占比
export const get_member_nft_value = ({ member_id }) => (dispatch) => {
  return dashboardAPI
    .get_member_nft_value(member_id)
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_member_nft_value({
          member_nft_value: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_member_ranking_by_holding_nfts = () => (dispatch) => {
  return dashboardAPI
    .get_member_ranking_by_holding_nfts()
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_member_ranking_by_holding_nfts({
          member_ranking_by_holding_nfts: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_nft_member_list = () => (dispatch) => {
  return dashboardAPI
    .get_nft_member_list()
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_nft_member_list({
          nft_member_list: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_someone_collections = ({ member_id }) => (dispatch) => {

  return dashboardAPI
    .get_someone_collections(member_id)
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_someone_collections({
          someone_collections: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_someone_collection_items = ({ member_id, collection }) => (dispatch) => {
  return dashboardAPI
    .get_someone_collection_items(member_id, collection)
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_someone_collection_items({
          someone_collection_items: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

//所有幣種
export const get_crypto_member_list = () => (dispatch) => {
  return dashboardAPI
    .get_crypto_member_list()
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_crypto_member_list({
          crypto_member_list: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_member_ranking_by_holding_crypto = () => (dispatch) => {
  return dashboardAPI
    .get_member_ranking_by_holding_crypto()
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_member_ranking_by_holding_crypto({
          member_ranking_by_holding_crypto: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_crypto_ranking = ({ member_id }) => (dispatch) => {

  return dashboardAPI
    .get_crypto_ranking(member_id)
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_crypto_ranking({
          crypto_ranking: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_someone_crypto_usd = ({ member_id }) => (dispatch) => {
  return dashboardAPI
    .get_someone_crypto_usd(member_id)
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_someone_crypto_usd({
          someone_crypto_usd: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_member_crypto_value = ({ member_id }) => (dispatch) => {
  return dashboardAPI
    .get_member_crypto_value(member_id)
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_member_crypto_value({
          member_crypto_value: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};