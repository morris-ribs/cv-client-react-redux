import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ProfessionalExperienceList from './ProfessionalExperienceList';
import DegreeList from './background/educational/DegreeList';
import Languages from './languages/Languages';

class CandidatePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          candidate: Object.assign({}, this.props.candidate)
        };
    }
    
    candidatePresentation(candidate) {
        return <div>{candidate.name}</div>;
    }
    
    render() {
        const candidateToDisplay = this.props.candidate;

        return (
            <div>
                <h1>{this.candidatePresentation(candidateToDisplay)}</h1>                
                <ProfessionalExperienceList exps={(candidateToDisplay.fullcvs) ? candidateToDisplay.fullcvs[0].experiences : []} />             
                <DegreeList education={(candidateToDisplay.fullcvs) ? candidateToDisplay.fullcvs[0].education : []} />            
                <Languages languages={(candidateToDisplay.fullcvs) ? candidateToDisplay.fullcvs[0].languages : []} />
            </div>
        );
    }
}

CandidatePage.propTypes = {
    candidate: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {        
        candidate: state.candidate
    };
}

const connectedStateAndProps = connect(mapStateToProps); 

export default connectedStateAndProps(CandidatePage);