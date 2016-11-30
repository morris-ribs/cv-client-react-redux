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
                <Col xs={12} sm={12} md={12}>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <span style={{fontSize: '24px'}}>{degreeToDisplay.schoolname}</span>
                            <br />
                            <span style={{fontSize: '18px'}}>{degreeToDisplay.location}</span>
                            <br />
                            <span style={{fontSize: '18px'}}>{degreeToDisplay.period}</span>							  
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h4>{degreeToDisplay.degree}</h4>
                            <Row>
                                <Col xs={12} sm={12} md={12}>
                                    {degreeToDisplay.description}
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