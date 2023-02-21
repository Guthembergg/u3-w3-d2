import { DATA, ERROR, ERROR_FALSE, LOADING, LOADING_FALSE } from "../actions";

const initialState = {
  array: [],
  error: false,
  errorMessage: "",
  loading: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        array: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default dataReducer;
