import {
  POST_API_STARTED,
  POST_API_SUCCESS,
  POST_API_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};
const postApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_API_STARTED:
      return {
        ...state,
        loading: true,
      };
    case POST_API_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case POST_API_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
  }
};

export default postApiReducer;