import React, {PropTypes} from 'react';

const Languages = ({languages}) => {
    return (
        <div className="row">
            <div className="colXs12 colSm12 colMd12">
                <h3>Langues</h3>
                {this.props.languages.map(lang =>
                    <div className="row">
                        <div className="colXs12 colSm3 colMd3">
                            <span style={{fontSize: '16px'}}>{lang.name} ({lang.level})</span>
                        </div>
                    </div>
                )} 
            </div>
        </div>
    );
};

Languages.propTypes = {
    languages: PropTypes.array.isRequired
};

export default Languages;