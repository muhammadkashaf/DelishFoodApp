import { combineReducers } from "redux";
import authenticationReducer from '../reducers/authencationReducer';

export default combineReducers({
    authReducer: authenticationReducer
})