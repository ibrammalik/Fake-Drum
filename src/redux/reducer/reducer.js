import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "click":
      return {
        ...state,
        display: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
