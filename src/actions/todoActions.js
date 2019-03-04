import axios from "axios";
import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  TODOS_LOADING
} from "./types.js";

export const getTodos = () => dispatch => {
  dispatch(setTodosLoading());
  axios.get("/data/todos.json").then(res =>
    dispatch({
      type: GET_TODOS,
      payload: res.data
    })
  );
};

export const addTodo = todo => dispatch => {
  axios.post("/api/todos", todo).then(res =>
    dispatch({
      type: ADD_TODO,
      payload: res.data
    })
  );
};

export const deleteTodo = id => dispatch => {
  axios.delete(`/api/todos/${id}`).then(res =>
    dispatch({
      type: DELETE_TODO,
      payload: id
    })
  );
};

export const updateTodo = todo => dispatch => {
  axios.put(`/api/todos/${todo._id}`, todo).then(res =>
    dispatch({
      type: UPDATE_TODO,
      payload: res.data
    })
  );
};

export const setTodosLoading = () => {
  return {
    type: TODOS_LOADING
  };
};
