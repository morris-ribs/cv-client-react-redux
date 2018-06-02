import * as types from './actionTypes';
import CandidateApiClient from '../api/CandidateApiClient';

export function getCandidateSuccess(candidate) {
  return { type: types.LOAD_CANDIDATE_SUCCESS, candidate };
}

export function loadCandidate(candidateId) {
  return function(dispatch) {
    return CandidateApiClient.getCandidate(candidateId).then(candidate => {
      dispatch(getCandidateSuccess(candidate));
    }).catch(error => { 
      throw(error); 
    });
  };
}