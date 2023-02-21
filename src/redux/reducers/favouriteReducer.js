import { ADD, ADD_ID, REMOVE, REMOVE_ID } from "../actions";

const initialState = {
  content: [],
  id: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case ADD_ID:
      return {
        ...state,
        id: [...state.id, action.payload],
      };

    case REMOVE:
      return {
        ...state,
        content: state.content.filter((el) => el !== action.payload),
      };
    case REMOVE_ID:
      return {
        ...state,
        id: state.id.filter((el) => el !== action.payload),
      };
    default:
      return state;
  }
};

export default favouriteReducer;
