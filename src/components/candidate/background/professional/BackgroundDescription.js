import React, {PropTypes} from 'react';
import Projects from './Projects';
import Competences from './Competences';
import { Row, Col } from 'react-bootstrap';

class BackgroundDescription extends React.Component {
    constructor(props) {
        super(props);
    } 

    render() {
        const expToDisplay = this.props.background;       
        return (
            <Row>                    
                <Col xs={12}>
                    <Row>
                        <Col xs={12}>
                            <span className="span-presentation-font-size">Description</span>
                            <Row>
                                <Col xs={12}>
                                <span className="span-basic-font-size">{expToDisplay.companydescription}</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Projects projects={expToDisplay.projects} />
                    <Competences technologies={expToDisplay.technologies} />
                </Col>
            </Row>
        );
    }
}

BackgroundDescription.propTypes = {
    background: PropTypes.object.isRequired
};

export default BackgroundDescription;