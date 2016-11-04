import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ProfessionalExperience from './ProfessionalExperience';

// we consider a hypothetical candidate.exps as the list of professional experiences
class ProfessionalExperienceList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                {this.props.exps.map(exp => 
                    <ProfessionalExperience  exp={exp} key={exp.companyname}/>
                )}            
            </div>
        );
    }
}

ProfessionalExperienceList.propTypes = {
    exps: PropTypes.array.isRequired
};

export default ProfessionalExperienceList;