import React, {PropTypes} from 'react';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

const Technology = ({tech, index}) => {
    let style = "info";
    switch (index%4) {
        case 0: style = "success"; break;
        case 1: style = "danger"; break;
        case 2: style = "warning"; break;
        default: style = "info";
    }

    return (
        <div style={{marginTop:"10pt", marginLeft:"5pt", marginRight:"5pt"}} key={tech.name}>
            {tech.name} <br />
            <div className="progressSkill">
                <ProgressBar style={{height:"10px"}} bsStyle={style} active now={parseInt(tech.level)} />
            </div>
        </div>
    );
};

Technology.propTypes = {
    tech: PropTypes.object.isRequired
};

export default Technology;