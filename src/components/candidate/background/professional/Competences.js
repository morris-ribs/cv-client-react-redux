import React, {PropTypes} from 'react';
import Technos from './Technos';

const Competences = ({technologies}) => {
    return (
        <div className="row">
            <div className="colXs12 colSm12 colMd12">
                <h4>Comp&eacute;tences acquises</h4>
                <div className="row">
                    <div className="colXs12 colSm12 colMd12">
                        Backend :
                        <Technos techs={technologies.backend} />
                    </div>
                </div>
                <div className="row">
                    <div className="colXs12 colSm12 colMd12">
                        Base de donn&eacute;es :
                        <Technos techs={technologies.database} />
                    </div>
                </div>
                <div className="row">
                    <div className="colXs12 colSm12 colMd12">
                        Frontend :
                        <Technos techs={technologies.frontend} />
                    </div>
                </div>
                <div className="row">
                    <div className="colXs12 colSm12 colMd12">
                        Contr&ocirc;le de version :
                        <Technos techs={technologies.controlversion} />
                    </div>
                </div>
            </div>
        </div>
    );
};

Competences.propTypes = {
    technologies: PropTypes.object.isRequired
};

export default Competences;