import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Presentation from './presentation/Presentation';
import ProfessionalExperienceList from './background/professional/ProfessionalExperienceList';
import DegreeList from './background/educational/DegreeList';
import Languages from './languages/Languages';
import {loadCandidate} from '../../actions/candidateActions';

class CandidatePage extends React.Component {
  constructor(props, context) {    
    super(props, context);

    this.state = {
      candidate: Object.assign({}, this.props.candidate)
    };
  }

  componentDidMount() {
    if (!!this.props.match && !!this.props.match.params && !!this.props.match.params.candidateId) {
      this.props.dispatch(loadCandidate(this.props.match.params.candidateId));
    } else {
      this.props.dispatch(loadCandidate(""));
    }
  }
    
  render() {
    const candidateToDisplay = this.props.candidate;
    return (
      <Row style={{margin:"0px"}}>    
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