import React, {PropTypes} from 'react';
import Degree from './Degree';
import { Grid } from 'react-bootstrap';

// the list of degrees of the candidate
class DegreeList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Grid>
                {this.props.education.map(degree => 
                    <Degree degree={degree} key={degree.schoolname} />
                )}            
            </Grid>
        );
    }
}

DegreeList.propTypes = {
    education: PropTypes.array.isRequired
};

export default DegreeList;