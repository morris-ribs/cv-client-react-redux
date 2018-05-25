import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import MdWork from 'react-icons/lib/md/work';
import styled from 'styled-components';

import InternalCarousel from '../../../shared/Carousel/InternalCarousel';
import ProfessionalExperience from './ProfessionalExperience';

const Item = styled.div`
background: #eae8e7;
text-align: center;
padding: 50px;
color: #5da4d9;
`;

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
                        <InternalCarousel>
                        </InternalCarousel>               
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