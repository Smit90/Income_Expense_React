export const AppReducer = (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTION":
      return {
        ...state,
        loading: false,
        transactions: action.playload,
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.playload],
      };

    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.playload
        ),
      };

    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.playload,
      };
    default:
      return state;
  }
};
