import React, {PropTypes} from 'react';
import { Row, Col } from 'react-bootstrap';

class Degree extends React.Component {
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
        const degreeToDisplay = this.props.degree;
        const isHidden = this.state.isHidden;

        return(
            <Row>
                <Col xs={12}>
                    <Row>
                        <Col xs={12}>
                            <span className="span-presentation-font-size">{degreeToDisplay.schoolname}</span>
                            <br />
                            <span className="span-basic-font-size">{degreeToDisplay.location}</span>
                            <br />
                            <span className="span-basic-font-size">{degreeToDisplay.period}</span>							  
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <h4>{degreeToDisplay.degree}</h4>
                            <Row>
                                <Col xs={12}>
                                    <span className="span-basic-font-size">{degreeToDisplay.description}</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

Degree.propTypes = {
    degree: PropTypes.object.isRequired
};

export default Degree;