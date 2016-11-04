import React, {PropTypes} from 'react';

const Projects = ({projects}) => {
    return (
        <div>
            <div className="row">
                <div className="colXs12 colSm12 colMd12">
                    <h4>Projets</h4>
                    <div className="row">
                        <div className="colXs12 colSm12 colMd12">
                            {projects.map(project => <div>
                                {project.name} <br />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};

Projects.propTypes = {
    projects: PropTypes.array.isRequired
};

export default Projects;