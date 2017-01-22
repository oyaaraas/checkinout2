import React from 'react';
import {Button, Grid, Row, Col} from 'react-bootstrap';

export default React.createClass({
  render() {
    return (
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <h1>Informasjon kommer her...</h1>
            </Col>
          </Row>
        </Grid>
    );
  }
});
