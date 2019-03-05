import axios from "axios";
import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  CATEGORIES_LOADING
} from "./types.js";

export const getCategories = () => dispatch => {
  dispatch(setCategoriesLoading());
  const categories = JSON.parse(localStorage.getItem("categories")) || [];

  if (categories.length) {
    dispatch({
      type: GET_CATEGORIES,
      payload: categories
    });
  } else {
    axios.get("data/categories.json").then(res =>
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data
      })
    );
  }
};

export const addCategory = category => dispatch => {
  const categories = JSON.parse(localStorage.getItem("categories")) || [];
  categories.unshift(category);
  localStorage.setItem("categories", JSON.stringify(categories));
  dispatch({
    type: ADD_CATEGORY,
    payload: category
  });
};

export const deleteCategory = id => dispatch => {
  const categories = JSON.parse(localStorage.getItem("categories")) || [];
  const newCategories = categories.filter(category => {
    return category._id !== id;
  });
  localStorage.setItem("categories", JSON.stringify(newCategories));

  dispatch({
    type: DELETE_CATEGORY,
    payload: id
  });
};

export const setCategoriesLoading = () => {
  return {
    type: CATEGORIES_LOADING
  };
};
