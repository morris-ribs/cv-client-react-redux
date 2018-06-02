class CandidateApiClient {
  static getCandidate(candidateId) {
    console.log(candidateId);
    // here we do a simple call to the dummy server and retrieve the response as JSON 
    return fetch(`http://localhost:4000/${candidateId}`).then(response => response.json());
  }
}

export default CandidateApiClient;