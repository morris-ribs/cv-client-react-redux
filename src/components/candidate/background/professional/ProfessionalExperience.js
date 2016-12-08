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
            <Row className="basic-border" onClick={this.handleClick}>
                <Col xs={12}>
                    <Row>
                        <Col xs={12}>
                            <Row>
                                <div className="column2">
                                <Col xs={12}>
                                    <span>{expToDisplay.companyname}</span> 
                                </Col>
                                </div>
                            </Row>
                            <Row>
                                <div className="column2"><Col xs={7}>
                                    <span className="span-basic-font-size">{expToDisplay.location}</span>
                                 </Col>
                                 <Col xs={5}>
                                    <span className="span-basic-font-size">{expToDisplay.period}</span>
                                 </Col></div>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                           <BackgroundDescription background={expToDisplay} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

ProfessionalExperience.propTypes = {
    exp: PropTypes.object.isRequired
};

export default ProfessionalExperience;