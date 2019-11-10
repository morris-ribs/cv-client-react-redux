import React, {PropTypes} from 'react';
import Degree from './Degree';
import { Row, Col } from 'react-bootstrap';
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';

// the list of degrees of the candidate
class DegreeList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Row className="exp">
                <Col xs={12}>
                    <div className="workexp">
                        <Row>
                            <Col xs={12} sm={1}>
                                <div className="divImg"><FaGraduationCap className="imgSize" /></div>
                            </Col>
                            <Col xs={12} sm={11}>                        
                                <span className="exph2">Education</span>
                            </Col>
                        </Row>                  
                        {this.props.education.map(degree => 
                            <Degree degree={degree} key={degree.schoolname} />
                        )} 
                    </div>                    
                </Col>
            </Row>    
        );
    }
}

DegreeList.propTypes = {
    education: PropTypes.array.isRequired
};

export default DegreeList;