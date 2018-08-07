import CandidatePage from './components/candidate/CandidatePage';
import {loadCandidate} from './actions/candidateActions';


export const routes = [  
  { path: '/:candidateId',
    component: CandidatePage,
    loadData: (candidateId) => loadCandidate(candidateId)
  }
];