import thunk from 'redux-thunk';

class CandidateApiClient {
  static getCandidate() {
    // 581b1ef3cfb719bdc221edba
   // return new Promise((resolve, reject) => {
     // resolve(Object.assign([], fetch('http://localhost:8080/candidate/5812686067d7dd00cd4ee24c')));
    //});
    return fetch(`http://localhost:8080/candidate/581b1ef3cfb719bdc221edba`).then(response => response.json());
  }
}

export default CandidateApiClient;