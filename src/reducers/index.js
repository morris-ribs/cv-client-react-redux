import {combineReducers} from 'redux';
import candidate from './candidateReducer';

const rootReducer = combineReducers({
    candidate
});

export default rootReducer;