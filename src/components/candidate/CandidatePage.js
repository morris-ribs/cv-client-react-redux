import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import Presentation from './presentation/Presentation';
import ProfessionalExperienceList from './background/professional/ProfessionalExperienceList';
import DegreeList from './background/educational/DegreeList';
import Languages from './languages/Languages';
import {loadCandidate} from '../../actions/candidateActions';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


class CandidatePage extends React.Component {
  constructor(props, context) {    
    super(props, context);

    this.state = {
      candidate: Object.assign({}, this.props.candidate)
    };
  }

  componentDidMount() {
    if (!!this.props.params && !!this.props.params.candidateId) {
      console.log("dispatching " + this.props.params.candidateId);
      this.props.dispatch(loadCandidate(this.props.params.candidateId));
    } else {
      console.log("dispatching default candidate");
      this.props.dispatch(loadCandidate(""));
    }
  }
    
  render() {
    const candidateToDisplay = this.props.candidate;
    return (
      <Row>
        <Col xs={12} md={3}> 
          <div className="presentationcol"> 
            <Presentation candidate={candidateToDisplay} />
          </div>
        </Col>
        <Col xs={12} md={9}>          
          <div className="column2">
            <ProfessionalExperienceList exps={(candidateToDisplay.fullcvs) ? candidateToDisplay.fullcvs[0].experiences : []} />             
            <DegreeList education={(candidateToDisplay.fullcvs) ? candidateToDisplay.fullcvs[0].education : []} />            
            <Languages languages={(candidateToDisplay.fullcvs) ? candidateToDisplay.fullcvs[0].languages : []} />
          </div>
        </Col>
      </Row>
    );
  }
}

CandidatePage.propTypes = {
  candidate: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {        
    candidate: state.candidate
  };
}

const connectedStateAndProps = connect(mapStateToProps); 

export default connectedStateAndProps(CandidatePage);