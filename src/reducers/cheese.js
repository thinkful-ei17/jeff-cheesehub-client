import * as actions from './actions';


const initialState = {
  cheeses: [],
  loading: false,
  error: null,
};


export function cheeseReducer(state=initialState, action) {
  // Handle these sync actions
  switch (action.type) {
    case 'SEARCH_CHARACTERS_REQUEST':
    return {
      ...state,
      loading: true,
      error: null
    }
    case 'SEARCH_CHARACTERS_SUCCESS':
    return {
      ...state,
      characters: action.characters,
      loading: false,
      error: null
    }

    case 'SEARCH_CHARACTERS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error
      }

      default: return state;
  }
}

export default cheeseReducer;
