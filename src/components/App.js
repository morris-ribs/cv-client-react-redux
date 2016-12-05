// This component handles the App template used on every page
import React, {PropTypes} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class App extends React.Component {
    render() {
        return(
            <Grid fluid>
                <Row>
                <Col xs={12}>
                {this.props.children}
                </Col>
                </Row>
            </Grid>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;