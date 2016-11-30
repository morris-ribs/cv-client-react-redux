import React, {PropTypes} from 'react';
import BackgroundDescription from './background/professional/BackgroundDescription';
import { ButtonToolbar, Button, Row, Col } from 'react-bootstrap';

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
        /**/
        return (
            <Row>
                <Col xs={12} sm={12} md={12}>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <Row>
                                <Col xs={8} sm={8} md={6}>
                                    <span style={{fontSize: '24px'}}>{expToDisplay.companyname}</span> 
                                </Col>
                                <Col xs={4} sm={4} md={6}>                           
                                    <Button onClick={this.handleClick}>Show/Hide</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm={12} md={12}>
                                    <span style={{fontSize: '18px'}}>{expToDisplay.location}</span>
                                 </Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm={12} md={12}>
                                    <span style={{fontSize: '18px'}}>{expToDisplay.period}</span>
                                 </Col>
                            </Row>
                        </Col>
                    </Row>
                    <div className={isHidden ? "hidden":""}>
                        <BackgroundDescription background={expToDisplay} />
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