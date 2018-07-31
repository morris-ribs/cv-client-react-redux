// This component handles the App template used on every page
import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-bootstrap/lib/Grid';

class App extends React.Component {
  render() {
    return(
      <Grid fluid>
        {this.props.children}
      </Grid>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;