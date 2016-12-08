import React, {PropTypes} from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

const Skills = ({skills}) => {
    return (
        <Row>
            <Col xs={12}>
                {(skills != null) ? skills.map(skill => 
                    <div key={skill.name}>
                        <div className="presentationcontent">
                        {skill.name} <br />
                        </div>
                        <div className="progressSkill">
                        <ProgressBar style={{height:"10px"}} bsStyle="info" active now={parseInt(skill.level)} />
                         </div>
                    </div>
                ) : []
            }
            </Col>
        </Row>
    );
};

Skills.propTypes = {
    skills: PropTypes.array.isRequired
};

export default Skills;