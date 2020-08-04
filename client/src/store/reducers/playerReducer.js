import { PLAYER_INFO } from "../actions/actionTypes";
const initialState = {
  enNo: "",
  collageId: "",
  name: "",
  fatherName: "",
  motherName: "",
  dob: "",
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_INFO:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default playerReducer;
