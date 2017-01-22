import React from 'react';
import {FormGroup, InputGroup, FormControl, Button, Grid, Row, Col} from 'react-bootstrap';

export default React.createClass({
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={6}>
            <form>
              <FormGroup bsSize="large">
                <InputGroup>
                  <FormControl type="text" placeholder="Søk etter kategori"/>
                  <InputGroup.Button>
                    <Button bsSize="large">Søk</Button>
                  </InputGroup.Button>
                </InputGroup>
              </FormGroup>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
});
