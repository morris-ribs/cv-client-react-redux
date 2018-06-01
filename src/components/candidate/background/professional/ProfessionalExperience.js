import React, {PropTypes} from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import BackgroundPresentation from '../BackgroundPresentation';
import Projects from './Projects';

class ProfessionalExperience extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const expToDisplay = this.props.exp;
        const presentation = Object.assign({}, this.props.exp, { title: expToDisplay.companyname, description: expToDisplay.companydescription });
        return (
            <li
              className={
                this.props.index == this.props.activeIndex
                  ? "carousel__slide carousel__slide--active"
                  : "carousel__slide"
              }
            >
              <BackgroundPresentation presentation={presentation} />
              <Row>                    
                <Col xs={12}>                  
                  <Projects projects={expToDisplay.projects} />
                </Col>
              </Row>
            </li>
        );
    }
}

ProfessionalExperience.propTypes = {
    exp: PropTypes.object.isRequired
};

export default ProfessionalExperience;