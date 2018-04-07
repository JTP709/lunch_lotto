import React, { Component } from 'react';
import { ConnectedRestaurants } from '../containers/ConnectedRestaurants';
import { ConnectedLotto } from '../containers/ConnectedLotto';
import { Grid, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Col xs={6} md={4}>
            <ConnectedRestaurants />
          </Col>
          <Col xs={12} md={8}>
            <ConnectedLotto />
          </Col>
        </Grid>
      </div>
    );
  }
}

export default App;
