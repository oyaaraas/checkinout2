
import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import VisibleDatePicker from './VisibleDatePicker';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap';


const App = () => (
  <div>
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
  </div>
);

export default App;
