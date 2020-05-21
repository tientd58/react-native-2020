import {combineReducers} from 'redux';
import HomeReducer from '_features/Home/reducer';

export default combineReducers({
  homeReducer: HomeReducer,
});
