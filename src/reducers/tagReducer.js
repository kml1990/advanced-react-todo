import {
  GET_TAGS,
  ADD_TAG,
  DELETE_TAG,
  UPDATE_TAG,
  TAGS_LOADING
} from "../actions/types.js";

const initialState = {
  tags: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TAGS:
      return {
        ...state,
        tags: action.payload,
        loading: false
      };
    case ADD_TAG:
      return {
        ...state,
        tags: [action.payload, ...state.tags]
      };
    case DELETE_TAG:
      return {
        ...state,
        tags: state.tags.filter(tag => tag._id !== action.payload)
      };
    case UPDATE_TAG:
      return {
        ...state,
        tags: [action.payload, ...state.tags]
      };
    case TAGS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
