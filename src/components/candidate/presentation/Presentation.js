import React, {PropTypes} from 'react';
import Skills from './Skills';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Presentation extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          candidate: Object.assign({}, this.props.candidate)
        };
    }

    render() {
        const candidateToDisplay = this.props.candidate;
        return (
            <Row>
                <Col xs={12}>
                    <div className="presentationcontent">
                        <p className="exph2">{candidateToDisplay.name}</p>
                    </div>
                    <div className="presentationcontent">
                        <p>{candidateToDisplay.presentation}</p>
                    </div>
                    <div className="presentationcontent">
                        <p>{candidateToDisplay.phone}</p>
                    </div>
                    <div className="presentationcontent">
                        <p>{candidateToDisplay.address ? candidateToDisplay.address.adr1 : ""}
                        <br/>
                        {candidateToDisplay.address ? candidateToDisplay.address.adr2 : ""}
                        </p>
                    </div>
                    <Skills skills={candidateToDisplay.skills ? candidateToDisplay.skills : []} />                       
                </Col>
            </Row>
        );
    }
}

Presentation.propTypes = {
    candidate: PropTypes.object.isRequired
};

export default Presentation;