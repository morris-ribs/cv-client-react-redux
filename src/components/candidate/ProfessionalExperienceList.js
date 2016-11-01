import React, {PropTypes} from 'react';
import ProfessionalExperience from './ProfessionalExperience';

// we consider a hypothetical candidate.exps as the list of professional experiences
const ProfessionalExperienceList = ({exps}) => {
    return (
        <div>
            {exps.map(exp => 
                <ProfessionalExperience  exp={exp} key={exp.companyname}/>
            )}            
        </div>
    );
};

ProfessionalExperienceList.propTypes = {
    exps: PropTypes.array.isRequired
};

export default ProfessionalExperienceList;