import React, {PropTypes} from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import FaCalendarCheckO from 'react-icons/lib/fa/calendar-check-o';

const Skills = ({skills}) => {
    return (
        <Row>
            <Col xs={12} sm={1} md={3}>
                <div className="divImg">
                    <FaCalendarCheckO className="imgPresentation" />
                </div>
            </Col>
            <Col xs={12} sm={11} md={9}>
                <p>Professional Skills</p>
            </Col>

            <Col xs={12}>
                {(skills != null) ? skills.map(skill => 
                    <div style={{marginTop:"10pt", marginLeft:"5pt", marginRight:"5pt"}} key={skill.name}>
                        {skill.name} <br />
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