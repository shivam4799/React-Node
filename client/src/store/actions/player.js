import axios from "axios";
import { PLAYER_INFO } from "./actionTypes";
import store from "../store";

export const savePlayer = data => {
  return {
    type: PLAYER_INFO,
    payload: data
  };
};

export const savePlayerToServer = () => {
  console.log(store.getState().player);
  return dispatch => {
    axios
      .post("/player/add", store.getState().player)
      .then(function(response) {
        console.log(response.data);
        // dispatch(playerSuccess(response.data));
        // navigate("/");
      })
      .catch(function(error) {
        console.log(error.response.data);
        // dispatch(playerFail(error.response.data));
      });
  };
};
