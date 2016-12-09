import React, {PropTypes} from 'react';
import BackgroundDescription from './BackgroundDescription';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class ProfessionalExperience extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const expToDisplay = this.props.exp;
        return (
            <Row className="basic-border">
                <Col xs={12}>
                    <div style={{marginTop:"15px"}}>
                        <Col xs={12}>
                            <span className="span-basic thick">{expToDisplay.companyname} @{expToDisplay.location}</span><br />
                            <span className="span-basic blu">{expToDisplay.period}</span>
                            <br />
                            <BackgroundDescription background={expToDisplay} />
                        </Col>
                    </div>
                </Col>
            </Row>
        );
    }
}

ProfessionalExperience.propTypes = {
    exp: PropTypes.object.isRequired
};

export default ProfessionalExperience;