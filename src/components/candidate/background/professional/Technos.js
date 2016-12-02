import React, {PropTypes} from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

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