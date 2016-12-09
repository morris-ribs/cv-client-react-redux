import React, {PropTypes} from 'react';
import Projects from './Projects';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class BackgroundDescription extends React.Component {
    constructor(props) {
        super(props);
    } 

    render() {
        const expToDisplay = this.props.background;       
        return (
            <Row>                    
                <Col xs={12}>
                    <div className="description">
                        <p>{expToDisplay.companydescription}</p>
                    </div>
                    <Projects projects={expToDisplay.projects} />
                </Col>
            </Row>
        );
    }
}

BackgroundDescription.propTypes = {
    background: PropTypes.object.isRequired
};

export default BackgroundDescription;