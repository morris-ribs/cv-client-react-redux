import React, {PropTypes} from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const Projects = ({projects}) => {
    return (
        <Row>
            <Col xs={12}>
                <span className="span-basic thick">Projects</span>
                <Row>
                    <Col xs={12}>
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