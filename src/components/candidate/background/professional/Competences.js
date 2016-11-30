import React, {PropTypes} from 'react';
import Technos from './Technos';
import { Row, Col } from 'react-bootstrap';

const Competences = ({technologies}) => {
    return (
        <Row>
            <Col xs={12} sm={12} md={12}>
                <h4>Comp&eacute;tences acquises</h4>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Backend :
                        <Technos techs={technologies.backend} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Base de donn&eacute;es :
                        <Technos techs={technologies.database} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Frontend :
                        <Technos techs={technologies.frontend} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Contr&ocirc;le de version :
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