import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

import ProjectModal from './ProjectModal';

class Projects extends React.Component {
  constructor(props, context) {
    super(props, context);

    const modalShow = {};
    this.props.projects.map(project => {
      modalShow[project.name] = false;
    });
    
    this.state = {
      projects: Object.assign({}, this.props.projects),
      modalShow: modalShow
    };
  }
  
  render() {    
    const projects = this.props.projects;
    let modalShow = this.state.modalShow;
    const setModalShow = (projectName, newModalShow) => {
      modalShow[projectName] = newModalShow;
      this.setState({modalShow : modalShow});
    };

    return (
      <Row>
        <Col xs={12}>
          <span className="span-basic thick">Projects (click on the titles to see the projects description)</span>
          <Row>
            <Col xs={12}>
              {projects.map(project => 
                <div key={project.name}>
                    <br/>
                    <br />
                    <Button onClick={() => setModalShow(project.name, true)}>
                      {project.name}
                    </Button>

                    <ProjectModal
                      show={modalShow[project.name]}
                      onHide={() => setModalShow(project.name, false)}
                      project={project}
                    />                           
                </div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>    
    );
  }
}

Projects.propTypes = {
    projects: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {        
    candidate: state.candidate
  };
}

const connectedStateAndProps = connect(mapStateToProps); 

export default connectedStateAndProps(Projects);