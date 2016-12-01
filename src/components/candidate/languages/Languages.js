import React, {PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

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