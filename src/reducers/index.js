import { combineReducers } from 'redux';
import listsReducer from './listsReducer';
import authReducer from './authReducer';

export default combineReducers({
    lists: listsReducer,
    auth: authReducer
});