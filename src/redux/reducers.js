import { combineReducers } from 'redux';
import car from './action';
import produtos from './Reducer';

export default combineReducers({
  car,
  produtos,
});
