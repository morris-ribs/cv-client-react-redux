import React, {PropTypes} from 'react';

class Degree extends React.Component {
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
        const degreeToDisplay = this.props.degree;
        const isHidden = this.state.isHidden;

        return(
            <div className="row">
                <div className="colXs12 colSm12 colMd12 pad">
                    <div className="row">
                        <div className="colXs12 colSm12 colMd12 details">
                            <span style={{fontSize: '24px'}}>{degreeToDisplay.schoolname}</span>
                            <div>
                                <button onClick={this.handleClick}>Show/Hide</button>
                            </div>
                            <br />
                            <span style={{fontSize: '18px'}}>{degreeToDisplay.location}</span>
                            <br />
                            <span style={{fontSize: '18px'}}>{degreeToDisplay.period}</span>							  
                        </div>
                    </div>
                    <div className={isHidden ? "hidden":"row"}>
                        <div className="colXs12 colSm12 colMd12">
                            <h4>{degreeToDisplay.degree}</h4>
                            <div className="row">
                                <div className="colXs12 colSm12 colMd12">
                                    {degreeToDisplay.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Degree.propTypes = {
    degree: PropTypes.object.isRequired
};

export default Degree;