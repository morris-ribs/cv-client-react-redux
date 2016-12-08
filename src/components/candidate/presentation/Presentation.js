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
                        <span className="exph2">{candidateToDisplay.name}</span></div>    
                        <div className="presentationborder">
                            <Row>
                                <Col xs={12}><div className="presentationcontent">
                                {candidateToDisplay.presentation}</div></Col>
                            </Row>
                        </div>
                        <div className="presentationborder">
                            <Row>
                                <Col xs={12}><div className="presentationcontent">{candidateToDisplay.phone}</div></Col>
                            </Row> 
                        </div> 
                        <div className="presentationborder">
                            <Row>
                                <Col xs={12}>
                                    <div className="presentationcontent">
                                        {candidateToDisplay.address ? candidateToDisplay.address.adr1 : ""}
                                        <br/>
                                        {candidateToDisplay.address ? candidateToDisplay.address.adr2 : ""}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="presentationborder">
                            <Skills skills={candidateToDisplay.skills ? candidateToDisplay.skills : []} />
                        </div>          
                </Col>
            </Row>
        );
    }
}

Presentation.propTypes = {
    candidate: PropTypes.object.isRequired
};

export default Presentation;