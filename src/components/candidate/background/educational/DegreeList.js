import React, {PropTypes} from 'react';
import Degree from './Degree';

// the list of degrees of the candidate
class DegreeList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                {this.props.education.map(degree => 
                    <Degree degree={degree} key={degree.schoolname}/>
                )}            
            </div>
        );
    }
}

DegreeList.propTypes = {
    education: PropTypes.array.isRequired
};

export default DegreeList;