import React from 'react';
import PropTypes from 'prop-types';

class BackgroundPresentation extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const presentationToDisplay = this.props.presentation;
    return (
        <div style={{marginTop:"15px"}}>
          <span className="span-basic-large thick column2">{presentationToDisplay.title}</span>
          <span className="span-basic-1pt italic">@{presentationToDisplay.location}</span> - 
          <span className="span-basic-small margin-left-small blu">{presentationToDisplay.period}</span>
          
          <br />
          <div className="description">
              <p>{presentationToDisplay.description}</p>
          </div>
        </div>
    );
  }
}

BackgroundPresentation.propTypes = {
  presentation: PropTypes.object.isRequired
};

export default BackgroundPresentation;