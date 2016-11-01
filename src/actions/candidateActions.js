import * as types from './actionTypes';
import CandidateApiClient from '../api/CandidateApiClient';

export function getCandidateSuccess(candidate) {
    return { type: types.LOAD_CANDIDATE_SUCCESS, candidate };
}

export function loadCandidate() {
    return function(dispatch) {
        return CandidateApiClient.getCandidate().then(candidate => {
            dispatch(getCandidateSuccess(candidate));
        }).catch(error => { 
            throw(error); 
        });
    };
}