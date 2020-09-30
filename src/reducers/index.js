import { combineReducers } from 'redux';
import listsReducer from './listsReducer';
import authReducer from './authReducer';
import cardsReducer from './cardsReducer';

export default combineReducers({
    lists: listsReducer,
    cards: cardsReducer,
    auth: authReducer
});