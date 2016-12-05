import React, {PropTypes} from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

const Technos = ({techs}) => {
    return (
        <Row>
            <Col xs={12}>
                {(techs != null) ? techs.map(tech => 
                    <div key={tech.name}>
                        <span className="span-basic-font-size">
                        {tech.name} <br />
                        </span>
                        <ProgressBar bsStyle="info" now={parseInt(tech.level)} />
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