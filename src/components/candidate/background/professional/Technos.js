import React, {PropTypes} from 'react';
import { Row, Col } from 'react-bootstrap';

const Technos = ({techs}) => {
    return (
        <Row>
            <Col xs={12}>
                {(techs != null) ? techs.map(tech => 
                    <span className="span-basic-font-size">
                    {tech.name} <br />
                    </span>
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