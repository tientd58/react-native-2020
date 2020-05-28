import {combineReducers} from 'redux';
import HomeReducer from '_features/Home/State/reducer';

export default combineReducers({
  homeReducer: HomeReducer,
});
