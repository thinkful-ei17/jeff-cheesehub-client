import { createStore } from 'redux';
import cheeseReducer from './reducer';
import thunk from 'redux-thunk';


export default createStore(cheeseReducer, applyMiddleare(thunk));
