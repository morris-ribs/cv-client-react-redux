import React, {PropTypes} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const Languages = ({languages}) => {
    return (
            <Row>
                <Col xs={12}>
                    <span className="span-presentation-font-size">Langues</span>
                    <Row>
                    {languages.map(lang =>
                        <Col xs={12} key={lang.name}>
                            <span className="span-basic-font-size">{lang.name}</span>
                        </Col>
                    )}
                    </Row> 
                </Col>
            </Row>
    );
};

export default Languages;