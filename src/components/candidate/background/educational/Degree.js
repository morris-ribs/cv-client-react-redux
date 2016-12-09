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
                    <div style={{marginTop:"15px"}}>
                        <span className="span-basic thick">{degreeToDisplay.degree} @{degreeToDisplay.schoolname}, {degreeToDisplay.location}</span>
                        <br />
                        <span className="span-basic blu">{degreeToDisplay.period}</span>
                        <br />							 
                        <div className="description">
                            <p>{degreeToDisplay.description}</p>
                        </div>
                    </div>                            
                </Col>
            </Row>
        );
    }
}

Degree.propTypes = {
    degree: PropTypes.object.isRequired
};

export default Degree;