import initialState from "./initialState";
import bank from "./bank";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "click":
      return {
        ...state,
        display: action.payload,
      };
    case "switch":
      let selectedBank;
      let bankName;
      if (state.bank === bank.bankOne) {
        selectedBank = bank.bankTwo;
        bankName = "Smooth Piano Kit";
      } else {
        selectedBank = bank.bankOne;
        bankName = "Heater Kit";
      }

      return {
        ...state,
        display: bankName,
        bank: selectedBank,
      };
    default:
      return state;
  }
};

export default reducer;
