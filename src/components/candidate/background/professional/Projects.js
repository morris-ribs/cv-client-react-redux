import React, {PropTypes} from 'react';
import { Row, Col } from 'react-bootstrap';

const Projects = ({projects}) => {
    return (
        <Row>
            <Col xs={12} sm={12} md={12}>
                <span className="span-presentation-font-size">Projets</span>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        {projects.map(project => 
                            <span key={project.name} className="span-basic-font-size">
                            {project.name}
                            </span>
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