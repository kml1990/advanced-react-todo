import axios from "axios";
import { GET_TAGS, ADD_TAG, DELETE_TAG, TAGS_LOADING } from "./types.js";

export const getTags = () => dispatch => {
  dispatch(setTagsLoading());
  const tags = JSON.parse(localStorage.getItem("tags")) || [];
  if (tags.length) {
    dispatch({
      type: GET_TAGS,
      payload: tags
    });
  } else {
    axios.get("data/tags.json").then(res =>
      dispatch({
        type: GET_TAGS,
        payload: res.data
      })
    );
  }
};

export const addTag = tag => dispatch => {
  const tags = JSON.parse(localStorage.getItem("tags")) || [];
  tags.unshift(tag);
  localStorage.setItem("tags", JSON.stringify(tags));
  dispatch({
    type: ADD_TAG,
    payload: tag
  });
};

export const deleteTag = id => dispatch => {
  const tags = JSON.parse(localStorage.getItem("tags")) || [];
  const newTags = tags.filter(tag => {
    return tag._id !== id;
  });
  localStorage.setItem("tags", JSON.stringify(newTags));

  dispatch({
    type: DELETE_TAG,
    payload: id
  });
};

export const setTagsLoading = () => {
  return {
    type: TAGS_LOADING
  };
};
