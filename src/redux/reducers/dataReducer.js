import { DATA } from "../actions";

const initialState = {
  array: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        array: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
