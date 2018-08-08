import React, {PropTypes} from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FaCalendarCheckO from 'react-icons/lib/fa/calendar-check-o';

import Technology from './Technology';

const Skills = ({skills}) => {
    return (
         <div className="presentationcontent">
            <Row>
                <Col xs={12} sm={1} md={3}>
                    <div className="divImg">
                        <FaCalendarCheckO className="imgPresentation" />
                    </div>
                </Col>
                <Col xs={12} sm={11} md={9}>
                    <p className="professional-skills">Professional Skills</p>
                </Col>
                <Col xs={12}>
                    
                    {(skills != null) ? skills.map((skill, index) => 
                        <div style={{marginTop:"10pt", marginLeft:"5pt", marginRight:"5pt"}} key={index}>
                            <p className="thick"> > {skill.name} <br /></p>
                            {skill.technologies.map((technology, indexTech) => 
                                <Technology key={indexTech} tech={technology} index={index} />
                            )}
                        </div>
                       
                    ) : []
                }
                </Col>
            </Row>
        </div>
    );
};

Skills.propTypes = {
    skills: PropTypes.array.isRequired
};

export default Skills;