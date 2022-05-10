export const getAllFlavoursReducers = (state = { flavours: [] }, action) => {
  switch (action.type) {
    case "GET_FLAVOURS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_FLAVOURS_SUCCESS":
      return {
        loading: false,
        flavours: action.payload,
      };
    case "GET_FLAVOURS_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
