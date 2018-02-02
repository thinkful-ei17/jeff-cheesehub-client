import CheeseList from './components/cheese-list';

export const FETCH_CHEESES_REQUEST = 'SEARCH_CHARACTERS_REQUEST';
export const fetchCheesesRequest = () => ({
    type: SEARCH_CHARACTERS_REQUEST
});

export const FETCH_CHEESES_SUCCESS = 'SEARCH_CHARACTERS_SUCCESS';
export const fetchCheesesSuccess = characters => ({
    type: SEARCH_CHARACTERS_SUCCESS,
    cheeses
});

export const FETCH_CHEESES_ERROR = 'SEARCH_CHARACTERS_ERROR';
export const fetchCheesesError = error => ({
    type: SEARCH_CHARACTERS_ERROR,
    error
});

export const fetchCheeses = cheese => dispatch => {
  dispatch(fetchCheesesRequest());
  search(cheeses)
  .then(cheese => dispatch(searchCharactersSuccess(cheese)))
  .catch(err => dispatch(searchCharactersError(err)));
};


// export const fetchCheeses = name => dispatch => {
//   dispatch(searchCharactersRequest());
//   search(name)
//   .then(character => dispatch(searchCharactersSuccess(character)))
//   .catch(err => dispatch(searchCharactersError(err)));
// };
