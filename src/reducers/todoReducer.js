import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  TODOS_LOADING,
  FILTER_TODO
} from "../actions/types.js";

const initialState = {
  todos: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      localStorage.setItem("todos", JSON.stringify(action.payload));
      return {
        ...state,
        todos: action.payload,
        loading: false
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo._id !== action.payload)
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((item, index) => {
          if (item._id !== action.payload._id) {
            
            // This isn't the item we care about - keep it as-is
            return item;
          }
          // Otherwise, this is the one we want - return an updated value
          return {
            ...item,
            ...action.payload
          };
        })
      };
    case FILTER_TODO:
      return {
        ...state,
        todos: action.payload
      };
    case TODOS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
