import { CheeseList } from '../components/cheese-list';
import {API_BASE_URL} from '../config';


export const FETCH_CHEESE_REQUEST = 'SEARCH_CHARACTERS_REQUEST';
export const fetchCheesesRequest = () => ({
    type: FETCH_CHEESE_REQUEST
});

export const FETCH_CHEESE_SUCCESS = 'SEARCH_CHARACTERS_SUCCESS';
export const fetchCheesesSuccess = cheeses => ({
    type: FETCH_CHEESE_SUCCESS,
    cheeses
});

export const FETCH_CHEESE_ERROR = 'SEARCH_CHARACTERS_ERROR';
export const fetchCheesesError = error => ({
    type: FETCH_CHEESE_ERROR,
    error
});

export const fetchCheeses = () => dispatch => {
  dispatch(fetchCheesesRequest());
  fetch(`${API_BASE_URL}/cheeses`)
      .then(res => {
          if (!res.ok) {
              return Promise.reject(res.statusText);
          }
          console.log('fetch recieved');
          return res.json();
      })
      .then(cheese => {
        console.log(cheese);
          dispatch(fetchCheesesSuccess(cheese));
      })
      .catch(err => dispatch(fetchCheesesError(err)));
};


// export const fetchCheeses = name => dispatch => {
//   dispatch(searchCharactersRequest());
//   search(name)
//   .then(character => dispatch(searchCharactersSuccess(character)))
//   .catch(err => dispatch(searchCharactersError(err)));
// };
