import {
  FETCH_CHEESE_REQUEST,
  FETCH_CHEESES_SUCCESS,
  FETCH_CHEESES_ERROR,
} from './actions';

const initialState = {
  cheeses: [],
  loading: false,
  error: null,
};

export function cheeseReducer(state=initialState, action) {
  switch (action.type) {
    case 'FETCH_CHEESE_REQUEST':
    return {
      ...state,
      loading: true,
      error: null
    }
    case 'FETCH_CHEESES_SUCCESS':
    return {
      ...state,
      characters: action.cheeses,
      loading: false,
      error: null
    }
    case 'FETCH_CHEESES_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error
      }
      default: return state;
  }
}

export default cheeseReducer;
