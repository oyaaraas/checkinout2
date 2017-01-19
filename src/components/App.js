import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import VisibleDatePicker from './VisibleDatePicker';
import {Jumbotron, PageHeader, Button, Grid, Row, Col} from 'react-bootstrap';


const App = () => (
  <div>
    <Jumbotron>
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <h1>checkinout</h1>
          </Col>
        </Row>
      </Grid>
    </Jumbotron>
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={12}>
          <PageHeader>Profil</PageHeader>
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={4} md={4}>
          <PageHeader><small>Kategori</small></PageHeader>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </Col>
        <Col xs={8} md={8}>
          <PageHeader><small>Dato</small></PageHeader>
          <VisibleDatePicker />
        </Col>
      </Row>
    </Grid>
    <Jumbotron/>

  </div>
);

export default App;
