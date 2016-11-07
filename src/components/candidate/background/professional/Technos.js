import React, {PropTypes} from 'react';

const Technos = ({techs}) => {
    return (
        <div className="row">
            <div className="colXs12 colSsm12 colMd12">
                {(techs != null) ? techs.map(tech => <div>
                    {tech.name} <br />
                    </div>
                ) : []
            }
            </div>
        </div>
    );
};

Technos.propTypes = {
    techs: PropTypes.array.isRequired
};

export default Technos;