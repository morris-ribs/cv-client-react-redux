import React, {PropTypes} from 'react';

const Languages = ({languages}) => {
    return (
        <div className="row">
            <div className="colXs12 colSm12 colMd12">
                <h3>Langues</h3>
                {languages.map(lang =>
                    <div className="row">
                        <div className="colXs12 colSm3 colMd3">
                            <span style={{fontSize: '16px'}}>{lang.name}</span>
                        </div>
                    </div>
                )} 
            </div>
        </div>
    );
};

export default Languages;