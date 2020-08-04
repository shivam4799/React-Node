import axios from "axios";
import { navigate } from "@reach/router";
import jwt_decode from "jwt-decode";
import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
  SET_CURRENT_USER,
} from "./actionTypes";
import setAuthToken from "../../utilis/setAuthToken";

export const authStart = () => {
  return {
    type: AUTH_START,
  };
};

export const authSuccess = (authData) => {
  return {
    type: AUTH_SUCCESS,
    authData: authData,
  };
};
export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    errors: error,
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("/user/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response.data);
        const token = response.data.token;
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        console.log(decoded);

        // Set current user
        dispatch(setCurrentUser(decoded));
        dispatch(authSuccess(response.data));
        // navigate("/");
      })
      .catch(function (error) {
        console.log(error.response.data);
        dispatch(authFail(error.response.data));
      });
  };
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const logout = () => {
  localStorage.clear();
  return {
    type: AUTH_LOGOUT,
  };
};
