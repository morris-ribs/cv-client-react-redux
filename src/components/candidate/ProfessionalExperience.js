import React, {PropTypes} from 'react';
import BackgroundDescription from './background/professional/BackgroundDescription';
import { ButtonToolbar, Button, Collapse, Row, Col } from 'react-bootstrap';

class ProfessionalExperience extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          isHidden: true
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState(prevState => ({
            isHidden: !prevState.isHidden
        }));
    }

    render() {
        const expToDisplay = this.props.exp;
        const isHidden = this.state.isHidden;
        const btnText = this.state.isHidden ? "Show" : "Hide";
        return (
            <Row className="basic-border"  onClick={this.handleClick}>
                <Col xs={12}>
                    <Row>
                        <Col xs={12}>
                            <Row>
                                <Col xs={12}>
                                    <span>{expToDisplay.companyname}</span> 
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={7}>
                                    <span className="span-basic-font-size">{expToDisplay.location}</span>
                                 </Col>
                                 <Col xs={5}>
                                    <span className="span-basic-font-size">{expToDisplay.period}</span>
                                 </Col>
                            </Row>
                        
                            <Row>
                                <Col xs={12}>
                                    <Button bsStyle="link" bsSize="large">{btnText} Details</Button>
                                    <Collapse in={!isHidden}>
                                        <div>
                                            <BackgroundDescription background={expToDisplay} />
                                        </div>
                                    </Collapse>
                                </Col>
                            </Row>
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