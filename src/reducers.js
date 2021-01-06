import {combineReducers} from 'redux';
import HomeReducer from './Home/reducer';
import LoginReducer from './Login/reducer';

export default combineReducers({
  login: LoginReducer,
  home: HomeReducer,
});
