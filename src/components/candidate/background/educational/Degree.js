import React, {PropTypes} from 'react';
import { Row, Col } from 'react-bootstrap';
import BackgroundPresentation from '../BackgroundPresentation';

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
      const degreeToDisplay = { 
        title: this.props.degree.degree, 
        period: this.props.degree.period,
        location: this.props.degree.schoolname + ", " + this.props.degree.location,
        description: this.props.degree.description
      };
      const isHidden = this.state.isHidden;
      

      return(
        <Row>
          <Col xs={12}>
              <BackgroundPresentation presentation={degreeToDisplay} />                           
          </Col>
        </Row>
      );
    }
}

Degree.propTypes = {
    degree: PropTypes.object.isRequired
};

export default Degree;