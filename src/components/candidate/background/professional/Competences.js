import React, {PropTypes} from 'react';
import Technos from './Technos';
import { Row, Col } from 'react-bootstrap';

const Competences = ({technologies}) => {
    return (
        <Row>
            <Col xs={12}>
                <span className="span-presentation-font-size">Comp&eacute;tences acquises</span>
                <Row>
                    <Col xs={12}>
                        <span className="span-presentation-font-size">Backend :</span>
                        <Technos techs={technologies.backend} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <span className="span-presentation-font-size">Base de donn&eacute;es :</span>
                        <Technos techs={technologies.database} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <span className="span-presentation-font-size">Frontend :</span>
                        <Technos techs={technologies.frontend} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <span className="span-presentation-font-size">Contr&ocirc;le de version :</span>
                        <Technos techs={technologies.controlversion} />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

Competences.propTypes = {
    technologies: PropTypes.object.isRequired
};

export default Competences;