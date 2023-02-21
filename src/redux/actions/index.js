export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const ADD_ID = "ADD_ID";
export const REMOVE_ID = "REMOVE_ID";
export const DATA = "DATA";

export const removeID = (value) => ({ type: REMOVE_ID, payload: value });
export const addID = (value) => ({ type: ADD_ID, payload: value });
export const remove = (value) => ({ type: REMOVE, payload: value });
export const add = (value) => ({ type: ADD, payload: value });
export const data = (value) => ({ type: DATA, payload: value });

export const getJobAction = (baseEndpoint, query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: DATA,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
