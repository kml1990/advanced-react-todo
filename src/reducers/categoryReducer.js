import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  CATEGORIES_LOADING
} from "../actions/types.js";

const initialState = {
  categories: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      localStorage.setItem("categories", JSON.stringify(action.payload));
      return {
        ...state,
        categories: action.payload,
        loading: false
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [action.payload, ...state.categories]
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          category => category._id !== action.payload
        )
      };
    case CATEGORIES_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
