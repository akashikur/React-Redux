import { ERROR, LOADING, SEARCH_WORD } from "./actionType";

export const searchword = (word) => {
  return {
    type: SEARCH_WORD,
    payload: word,
  };
};
export const setloading = () => {
  return {
    type: LOADING,
  };
};
export const seterror = (error) => {
  return {
    type: ERROR,
    payload: error,
  };
};
