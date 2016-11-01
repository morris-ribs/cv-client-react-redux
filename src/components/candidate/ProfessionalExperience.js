import React, {PropTypes} from 'react';

const ProfessionalExperience = ({exp}) => {
    return (
        <div><h2>{exp.companyname}</h2></div>
    );
};

ProfessionalExperience.propTypes = {
    exp: PropTypes.object.isRequired
};

export default ProfessionalExperience;