import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ProfessionalExperience from './ProfessionalExperience';
import { Row, Col } from 'react-bootstrap';
import MdWork from 'react-icons/lib/md/work';

// we consider a hypothetical candidate.exps as the list of professional experiences
class ProfessionalExperienceList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Row className="exp">
                <Col xs={12}>
                    <div className="workexp">
                        <Col xs={12} sm={1}>
                            <div className="divImg"><MdWork className="imgSize" /></div>
                        </Col>
                        <Col xs={12} sm={11}>                        
                            <span className="exph2">Work Experience</span>
                        </Col>                    
                        {this.props.exps.map(exp => 
                            <ProfessionalExperience key={exp.companyname} exp={exp}  />
                        )}  
                    </div>
                </Col>                
             </Row>
        );
    }
}

ProfessionalExperienceList.propTypes = {
    exps: PropTypes.array.isRequired
};

export default ProfessionalExperienceList;