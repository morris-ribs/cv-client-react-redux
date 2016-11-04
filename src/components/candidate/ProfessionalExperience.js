import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class ProfessionalExperience extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          isHidden: true
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState(prevState => ({
            isHidden: !prevState.isHidden
        }));
    }

    render() {
        const expToDisplay = this.props.exp;
        const isHidden = this.state.isHidden;
        
        return (
            <div>
                <div>
                    <h2>{expToDisplay.companyname}</h2>
                    <button onClick={this.handleClick}>Show/Hide</button>
                </div>
                <div className={isHidden ? "hidden":""}><h2>{expToDisplay.companydescription}</h2></div>             
            </div>
        );
    }
}

ProfessionalExperience.propTypes = {
    exp: PropTypes.object.isRequired
};

export default ProfessionalExperience;