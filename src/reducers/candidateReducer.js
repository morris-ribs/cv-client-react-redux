import * as types from '../actions/actionTypes';

export default function candidateReducer(state = {}, action) {
    switch (action.type) {
        case types.LOAD_CANDIDATE_SUCCESS:
        return action.candidate;

        default: return state;
    }
    
}