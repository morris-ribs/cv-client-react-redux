import React, {PropTypes} from 'react';
import { Row, Col } from 'react-bootstrap';

const Technos = ({techs}) => {
    return (
        <Row>
            <Col xs={12} sm={12} md={12}>
                {(techs != null) ? techs.map(tech => 
                    <div>
                    {tech.name} <br />
                    </div>
                ) : []
            }
            </Col>
        </Row>
    );
};

Technos.propTypes = {
    techs: PropTypes.array.isRequired
};

export default Technos;