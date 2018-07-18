import React, {PropTypes} from 'react';
import Skills from './Skills';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FaAt from 'react-icons/lib/fa/at';
import FaPhone from 'react-icons/lib/fa/phone';
import FaHome from 'react-icons/lib/fa/home';
import FaUser from 'react-icons/lib/fa/user';

class Presentation extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          candidate: Object.assign({}, this.props.candidate)
        };
    }

    render() {
        const candidateToDisplay = this.props.candidate;
        const pathToImage = (candidateToDisplay.picture || "blank-img.png");
        return (
            <Row>
                <Col xs={12}>
                    <div className="presentationcontent">
                        <Row>
                            <Col xs={8}>
                                <p className="exph2">{candidateToDisplay.name}</p>
                            </Col>
                            <Col xs={4}>
                                <img className="photo" src={require(`../../../img/${pathToImage}`)} />
                            </Col>
                        </Row>
                    </div>
                    <div className="presentationcontent">
                        <Row>
                            <Col xs={12} sm={1} md={3}>
                                <div className="divImg">
                                    <FaUser className="imgPresentation" />
                                </div>
                            </Col>
                            <Col xs={12} sm={11} md={9}>
                                <p>{candidateToDisplay.presentation}</p>
                                <p><a href={candidateToDisplay.blog}>My blog in Medium</a></p>
                            </Col>
                        </Row>
                    </div>
                    <div className="presentationcontent">
                        <Row>
                            <Col xs={12} sm={1} md={3}>
                                <div className="divImg">
                                    <FaPhone className="imgPresentation" />
                                </div>
                            </Col>
                            <Col xs={12} sm={11} md={9}>
                                <p>{candidateToDisplay.phone}</p>
                            </Col>
                        </Row>
                    </div>
                    <div className="presentationcontent">
                        <Row>
                            <Col xs={12} sm={1} md={3}>
                                <div className="divImg">
                                    <FaAt className="imgPresentation" />
                                </div>
                            </Col>
                            <Col xs={12} sm={11} md={9}>
                                <p>{candidateToDisplay.email}</p>
                            </Col>
                        </Row>
                    </div>
                    <div className="presentationcontent">
                        <Row>
                            <Col xs={12} sm={1} md={3}>
                                <div className="divImg">
                                    <FaHome className="imgPresentation" />
                                </div>
                            </Col>
                            <Col xs={12} sm={11} md={9}>
                                <p>
                                    {candidateToDisplay.address ? candidateToDisplay.address.adr1 : ""}
                                    <br/>
                                    {candidateToDisplay.address ? candidateToDisplay.address.adr2 : ""}
                                </p>
                            </Col>
                        </Row>
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