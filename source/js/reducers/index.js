
import { combineReducers } from 'redux';
import mutterReducer from './mutterings';

const rootReducer = combineReducers({
    mutterings: mutterReducer
});

export default rootReducer
