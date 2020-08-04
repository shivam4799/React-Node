import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
  SET_CURRENT_USER,
} from "../actions/actionTypes";

const initialState = {
  name: "",
  loading: false,
  email: "",
  errors: null,
  token: null,
  isAuthenticated: false,
  user: {},
};
const authReducer = (state = initialState, action) => {
  // case AUTH_START:
  //   return {
  //     ...state,
  //     name: "developer.sp"
  //   };
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        errors: null,
        loading: false,
        ...action.authData,
      };
    case AUTH_FAIL:
      return {
        ...state,
        loading: false,
        errors: action.errors,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default authReducer;
