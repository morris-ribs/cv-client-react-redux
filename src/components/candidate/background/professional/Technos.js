import React, {PropTypes} from 'react';

const Technos = ({techs}) => {
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
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