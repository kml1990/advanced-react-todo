import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import categoryReducer from "./categoryReducer";
import tagReducer from "./tagReducer";

export default combineReducers({
  todo: todoReducer,
  category: categoryReducer,
  tag: tagReducer
});
