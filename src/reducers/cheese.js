import {
  FETCH_CHEESE_REQUEST,
  FETCH_CHEESE_SUCCESS,
  FETCH_CHEESE_ERROR
} from '../actions/cheese';

const initialState = {
  cheeses: [],
  loading: false,
  error: null,
};

export function cheeseReducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_CHEESE_REQUEST:
    return {
      ...state,
      loading: true,
      error: null
    }
    case FETCH_CHEESE_SUCCESS:
    return {
      ...state,
      cheeses: action.cheeses,
      loading: false,
      error: null
    }
    case FETCH_CHEESE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
      default: return state;
  }
}

export default cheeseReducer;
