import React, {PropTypes} from 'react';
import Degree from './Degree';
import { Row, Col } from 'react-bootstrap';

// the list of degrees of the candidate
class DegreeList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Row className="exp">
                <Col xs={12}>
                <h2>Formation</h2>
                    {this.props.education.map(degree => 
                        <Degree degree={degree} key={degree.schoolname} />
                    )}
                </Col>
            </Row>    
        );
    }
}

DegreeList.propTypes = {
    education: PropTypes.array.isRequired
};

export default DegreeList;