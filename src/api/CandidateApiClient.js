import thunk from 'redux-thunk';

class CandidateApiClient {
  static getCandidate() {
    // 581b1ef3cfb719bdc221edba
   // return new Promise((resolve, reject) => {
     // resolve(Object.assign([], fetch('http://localhost:8080/candidate/5812686067d7dd00cd4ee24c')));
    //});
    return fetch(`http://localhost:4000/`).then(response => response.json());
  }
}

export default CandidateApiClient;