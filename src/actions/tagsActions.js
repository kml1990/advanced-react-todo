import axios from "axios";
import {
  GET_TAGS,
  ADD_TAG,
  DELETE_TAG,
  UPDATE_TAG,
  TAGS_LOADING
} from "./types.js";

export const getTags = () => dispatch => {
  dispatch(setTagsLoading());
  axios.get("/data/tags.json").then(res =>
    dispatch({
      type: GET_TAGS,
      payload: res.data
    })
  );
};

export const addTag = tag => dispatch => {
  axios.post("/api/tags", tag).then(res =>
    dispatch({
      type: ADD_TAG,
      payload: res.data
    })
  );
};

export const deleteTag = id => dispatch => {
  axios.delete(`/api/tag/${id}`).then(res =>
    dispatch({
      type: DELETE_TAG,
      payload: id
    })
  );
};

export const updateTag = tag => dispatch => {
  axios.put(`/api/tags/${tag._id}`, tag).then(res =>
    dispatch({
      type: UPDATE_TAG,
      payload: res.data
    })
  );
};

export const setTagsLoading = () => {
  return {
    type: TAGS_LOADING
  };
};
