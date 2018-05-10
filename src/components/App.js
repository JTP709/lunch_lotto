import React, { Component } from 'react';
import { ConnectedRestaurants } from '../containers/ConnectedRestaurants';
import { ConnectedLotto } from '../containers/ConnectedLotto';
import { ConnectedFilters } from '../containers/ConnectedFilters';
import { ConnectedMap } from '../containers/ConnectedMap';
import { Grid, Col, Row } from 'react-bootstrap';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col md={12}>
              <h1 id="app_header">
                Restaruant Roulette!
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <ConnectedLotto />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <ConnectedMap />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <ConnectedFilters />
            </Col>
            <Col xs={12} md={8}>
              <ConnectedRestaurants />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
