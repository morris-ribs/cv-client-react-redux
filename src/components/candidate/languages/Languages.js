import React, {PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Languages = ({languages}) => {
    return (
        <Grid>
            <Row>
                <Col xs={12} sm={12} md={12}>
                    <h3>Langues</h3>
                    <Row>
                    {languages.map(lang =>
                        
                            <Col xs={12} sm={3} md={3}>
                                <span style={{fontSize: '16px'}}>{lang.name}</span>
                            </Col>
                        
                    )}
                    </Row> 
                </Col>
            </Row>
        </Grid>
    );
};

export default Languages;