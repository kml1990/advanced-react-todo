import axios from "axios";
import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
  CATEGORIES_LOADING
} from "./types.js";

export const getCategories = () => dispatch => {
  dispatch(setCategoriesLoading());
  axios.get("/api/categories").then(res =>
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data
    })
  );
};

export const addCategory = category => dispatch => {
  axios.post("/data/categories.json", category).then(res =>
    dispatch({
      type: ADD_CATEGORY,
      payload: res.data
    })
  );
};

export const deleteCategory = id => dispatch => {
  axios.delete(`/api/category/${id}`).then(res =>
    dispatch({
      type: DELETE_CATEGORY,
      payload: id
    })
  );
};

export const updateCategory = category => dispatch => {
  axios.put(`/api/categories/${category._id}`, category).then(res =>
    dispatch({
      type: UPDATE_CATEGORY,
      payload: res.data
    })
  );
};

export const setCategoriesLoading = () => {
  return {
    type: CATEGORIES_LOADING
  };
};
