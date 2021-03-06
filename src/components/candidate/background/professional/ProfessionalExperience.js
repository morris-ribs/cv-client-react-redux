import React from 'react';
import PropTypes from 'prop-types';
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
            <div
                className={
                this.props.index == this.props.activeIndex
                    ? "carousel__slide carousel__slide--active"
                    : "carousel__slide carousel__slide--inactive"
                }>
                <li>
                    <BackgroundPresentation presentation={presentation} />
                    <Row>                    
                        <Col xs={12}>                  
                        <Projects projects={expToDisplay.projects} />
                        </Col>
                    </Row>
                </li>
            </div>
        );
    }
}

ProfessionalExperience.propTypes = {
    exp: PropTypes.object.isRequired
};

export default ProfessionalExperience;