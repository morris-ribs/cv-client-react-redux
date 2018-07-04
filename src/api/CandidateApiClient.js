class CandidateApiClient {
  static getCandidate(candidateId) {
    console.log(candidateId);
    // here we do a simple call to the dummy server and retrieve the response as JSON 
    return fetch(`https://cv-server-rest-go.herokuapp.com/candidate/${candidateId}`).then(response => response.json());
  }
}

export default CandidateApiClient;