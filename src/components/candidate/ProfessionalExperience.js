import React, {PropTypes} from 'react';
import BackgroundDescription from './background/professional/BackgroundDescription';

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
        /**/
        return (
            <div className="row">
                <div className="colXs12 colSm12 colMd12 pad">
                    <div className="row">
                        <div className="colXs12 colSm12 colMd12 details">
                            <span style={{fontSize: '24px'}}>{expToDisplay.companyname}</span>
                            <button onClick={this.handleClick}>Show/Hide</button>
                            <div className="btn-details">
                                <img src="img/down-arrow.png" alt="Expand" />
                            </div>
                            <br />
                            <span style={{fontSize: '18px'}}>{expToDisplay.location}</span>
                            <br />
                            <span style={{fontSize: '18px'}}>{expToDisplay.period}</span>
                        </div>
                    </div>
                    <div className={isHidden ? "hidden":""}>
                        <BackgroundDescription background={expToDisplay} />
                    </div>
                </div>
            </div>
        );
    }
}

ProfessionalExperience.propTypes = {
    exp: PropTypes.object.isRequired
};

export default ProfessionalExperience;