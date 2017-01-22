import React from 'react';
import {Button, Jumbotron, Grid, Row, Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const App = (props) => (
  <div>
    <Jumbotron>
      <Grid>
        <Row className="show-grid">
          <Col xs={4} md={4}>
            <h1>checkinout</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={4} md={4}>
            <LinkContainer to="/">
              <Button bsStyle="link">Profil</Button>
            </LinkContainer>
            <LinkContainer to="/search">
              <Button bsStyle="link">Søk</Button>
            </LinkContainer>
          </Col>
        </Row>
      </Grid>
    </Jumbotron>
    {props.children}
  </div>
);

export default App;
