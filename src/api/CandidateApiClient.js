import thunk from 'redux-thunk';

class CandidateApiClient {
  static getCandidate() {
   // return new Promise((resolve, reject) => {
     // resolve(Object.assign([], fetch('http://localhost:8080/candidate/5812686067d7dd00cd4ee24c')));
    //});
    return fetch(`http://localhost:8080/candidate/5812686067d7dd00cd4ee24c`).then(response => response.json());
  }
}

export default CandidateApiClient;