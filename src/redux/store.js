import { createStore, applyMiddleware } from "redux";
import postApiReducer from "./reducers/postApiReducer";
import {thunk} from "redux-thunk";
const store = createStore(postApiReducer, applyMiddleware(thunk))
export default store;