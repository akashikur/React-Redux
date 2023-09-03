let initial = {
  loading: false,
  error: "",
  word: [],
};

const storeWord = (state = initial, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SEARCH_WORD":
      const item = state.word;
      return {
        ...state,
        loading: false,
        word: [...item, action.payload],
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default storeWord;
