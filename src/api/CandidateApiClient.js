import "isomorphic-fetch";

class CandidateApiClient {
  static getCandidate(candidateId) {
    const candidateToGet = (typeof candidateId === "string") ? candidateId : candidateId.params.candidateId;
    // here we do a simple call to the dummy server and retrieve the response as JSON 
    return fetch(`https://cv-server-rest-go.herokuapp.com/candidate/${candidateToGet}`).then(response => response.json());
  }
}

export default CandidateApiClient;