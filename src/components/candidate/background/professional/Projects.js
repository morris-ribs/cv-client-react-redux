import React, {PropTypes} from 'react';
import { Row, Col } from 'react-bootstrap';

const Projects = ({projects}) => {
    return (
        <Row>
            <Col xs={12} sm={12} md={12}>
                <h4>Projets</h4>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        {projects.map(project => <div>
                            {project.name} <br />
                            </div>
                        )}
                    </Col>
                </Row>
            </Col>
        </Row>    
    );
};

Projects.propTypes = {
    projects: PropTypes.array.isRequired
};

export default Projects;