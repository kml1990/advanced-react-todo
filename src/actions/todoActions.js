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
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  if (todos.length) {
    dispatch({
      type: GET_TODOS,
      payload: todos
    });
  } else {
    axios.get("/data/todos.json").then(res =>
      dispatch({
        type: GET_TODOS,
        payload: res.data
      })
    );
  }
};

export const addTodo = todo => dispatch => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.unshift(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
  dispatch({
    type: ADD_TODO,
    payload: todo
  });
};

export const deleteTodo = id => dispatch => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const newTodos = todos.filter(todo => {
    return todo._id !== id;
  });
  localStorage.setItem("todos", JSON.stringify(newTodos));

  dispatch({
    type: DELETE_TODO,
    payload: id
  });
};

export const updateTodo = updatedTodo => dispatch => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const updatedTodos = todos.map(todo => {
    if (todo._id === updatedTodo._id) {
      return (todo = updatedTodo);
    }
    return todo;
  });
  localStorage.setItem("todos", JSON.stringify(updatedTodos));

  dispatch({
    type: UPDATE_TODO,
    payload: updatedTodos
  });
};

export const setTodosLoading = () => {
  return {
    type: TODOS_LOADING
  };
};
