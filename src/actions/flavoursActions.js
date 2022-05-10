import axios from "axios";

export const getAllFlavours = () => async (dispatch) => {
  dispatch({ type: "GET_FLAVOURS_REQUEST" });
  try {
    const response = await axios.get("/api/flavours/getallflavours");
    console.log(response);
    dispatch({ type: "GET_FLAVOURS_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_FLAVOURS_FAILED", payload: err });
  }
};
