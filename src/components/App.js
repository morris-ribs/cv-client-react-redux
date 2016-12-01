// This component handles the App template used on every page
import React, {PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends React.Component {
    render() {
        return(
            <Grid fluid={true}>
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