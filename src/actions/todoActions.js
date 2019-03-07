import axios from "axios";
import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  FILTER_TODO,
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
    axios.get("data/todos.json").then(res =>
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
  const updatedTodos = todos.map( (todo, index) => {
    if (todo._id === updatedTodo._id) {
      return (todo = updatedTodo);
    }
    return todo;
  });
  localStorage.setItem("todos", JSON.stringify(updatedTodos));

  dispatch({
    type: UPDATE_TODO,
    payload: updatedTodo
  });
};

export const filterTodos = (type, value) => dispatch => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const filteredTodos = todos.filter(todo => {
    if (type === "general" && value === "all") {
      // return all
      return todo;
    } else if (type === "tag") {
      // search by tags
      let tags = JSON.parse(todo.tags);
      let hasTag = tags.filter(x => x.value === value).length !== 0;
      if (hasTag) {
        return todo;
      }
    } else {
      return todo[type] === value;
    }
  });

  dispatch({
    type: FILTER_TODO,
    payload: filteredTodos
  });
};

export const setTodosLoading = () => {
  return {
    type: TODOS_LOADING
  };
};
