import React, {PropTypes} from 'react';
import Projects from './Projects';
import Competences from './Competences';

class BackgroundDescription extends React.Component {
    constructor(props) {
        super(props);
    } 

    render() {
        const expToDisplay = this.props.background;       
        return (
            <div className="row exp">                    
                <div className="colXs12 colSm12 colMd12">
                    <div className="row">
                        <div className="colXs12 colSm12 colMd12">
                            <h4>Description</h4>
                            <div className="row">
                                <div className="colXs12 colSm12 colMd12">
                                {expToDisplay.companydescription}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Projects projects={expToDisplay.projects} />
                    <Competences technologies={expToDisplay.technologies} />
                </div>
            </div>
        );
    }
}

BackgroundDescription.propTypes = {
    background: PropTypes.object.isRequired
};

export default BackgroundDescription;