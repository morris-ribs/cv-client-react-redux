import React, {PropTypes} from 'react';
import Helmet from 'react-helmet';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FaAt from 'react-icons/lib/fa/at';
import FaGithub from 'react-icons/lib/fa/github';
import FaHome from 'react-icons/lib/fa/home';
import FaLinkedIn from 'react-icons/lib/fa/linkedin';
import FaMedium from 'react-icons/lib/fa/medium';
import FaPhone from 'react-icons/lib/fa/phone';
import FaUser from 'react-icons/lib/fa/user';

import Skills from './Skills';

class Presentation extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          candidate: Object.assign({}, this.props.candidate)
        };
    }

    renderBlog(blog, numCol) {
        if (blog != "") {
            return <Col xs={numCol}>
                <div className="divImg cursor-pointer blog-link">
                    <a target="blank" className="color-white" href={blog} title="Medium blog">
                        <FaMedium className="imgPresentation" />
                    </a>
                </div>
            </Col>;
        }

        return "";
    }

    renderLinkedIn(linkedIn, numCol) {
        if (linkedIn != "") {
            return <Col xs={numCol}>
                <div className="divImg cursor-pointer blog-link">
                    <a target="blank" className="color-white" href={linkedIn} title="LinkedIn">
                        <FaLinkedIn className="imgPresentation" />
                    </a>
                </div>
            </Col>;
        }

        return "";
    }

    renderGithub(github, numCol) {
        if (github != "") {
            return <Col xs={numCol}>
                <div className="divImg cursor-pointer blog-link">
                    <a target="blank" className="color-white" href={github} title="Github">
                        <FaGithub className="imgPresentation" />
                    </a>
                </div>
            </Col>;
        }

        return "";
    }

    renderLinks() {        
        const candidateToDisplay = this.props.candidate;
        let numLinks = 0;
        if (candidateToDisplay.blog != "") {
            numLinks++;
        }
        if (candidateToDisplay.linkedin != "") {
            numLinks++;
        }
        if (candidateToDisplay.github != "") {
            numLinks++;
        }
        if (numLinks == 0) { 
            return "";
        }
        const numCol = 12/numLinks;
        const links = 
                <Row>
                    {this.renderBlog(candidateToDisplay.blog, numCol)}
                    {this.renderLinkedIn(candidateToDisplay.linkedin, numCol)}
                    {this.renderGithub(candidateToDisplay.github, numCol)}
                </Row>;
        return links;
    }

    render() {
        const candidateToDisplay = this.props.candidate;
        const pathToImage = "https://res.cloudinary.com/dhuwmlfir/image/upload/" + (candidateToDisplay.picture || "v1533553527/local/blank-img.png");
        const mailTo = "mailto:" + candidateToDisplay.email;
        
         const metaTags = [
            { itemprop: 'name', content: candidateToDisplay.name },
            { itemprop: 'description', content: candidateToDisplay.presentation },
            { itemprop: 'image', content: pathToImage },
            { name: 'description', content: candidateToDisplay.presentation },
            { property: 'og:title', content: candidateToDisplay.name },
            { property: 'og:type', content: 'website' },
            { property: 'og:image', content: pathToImage },
            { property: 'og:description', content: candidateToDisplay.presentation },
            { property: 'og:site_name', content: candidateToDisplay.name }
        ];
        return (
            <div>
                <Helmet
                    htmlAttributes={{
                        lang: 'en'
                    }}
                    title={
                        "CV from " + candidateToDisplay.name
                    }
                    meta={metaTags}
                />
                <Row>
                    <Col xs={12}>
                        <div className="presentationcontent">
                            <Row>
                                <Col xs={8}>
                                    <p className="exph2 presentation-name">{candidateToDisplay.name}</p>
                                </Col>
                                <Col xs={4}>
                                <img className="photo" src={pathToImage} />
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
                                </Col>
                            </Row>
                            {this.renderLinks()}
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
                                    <p className="cursor-pointer"><a className="color-white" href={mailTo}>{candidateToDisplay.email}</a></p>
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
            </div>
        );
    }
}

Presentation.propTypes = {
    candidate: PropTypes.object.isRequired
};

export default Presentation;