import React, {PropTypes} from 'react';
import BackgroundDescription from './BackgroundDescription';

class ProfessionalExperience extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const expToDisplay = this.props.exp;
        return (
            <li
              className={
                this.props.index == this.props.activeIndex
                  ? "carousel__slide carousel__slide--active"
                  : "carousel__slide"
              }
            >
                <span className="span-basic thick">{expToDisplay.companyname} @{expToDisplay.location}</span><br />
                <span className="span-basic blu">{expToDisplay.period}</span>
                
                <br />
                <BackgroundDescription background={expToDisplay} />
            </li>
        );
    }
}

ProfessionalExperience.propTypes = {
    exp: PropTypes.object.isRequired
};

export default ProfessionalExperience;