import React from 'react';
import Restaurants from './components/Restaurants';
import Lotto from './components/Lotto';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';

//TODO: move to redux
import {testData} from './testData';

class App extends React.Component {
  constructor(){
    super();
    this.pickTheWinner = this.pickTheWinner.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.listFilter = this.listFilter.bind(this);
    this.addNewRestaurant = this.addNewRestaurant.bind(this);
    this.editRestaurant = this.editRestaurant.bind(this);
    this.deleteRestaurant = this.deleteRestaurant.bind(this);
    this.state = { ...testData, 
                  winner: 'Push the Button!', 
                  filters:{
                    type: undefined,
                    price: undefined,
                    distance: undefined,
                  },
                  filteredList: testData.restaurants }
  }

  addNewRestaurant(){
    console.log('Add');
  }

  editRestaurant(){
    console.log('Edit');
  }

  deleteRestaurant(){
    console.log('Delete');
  }

  setFilter(key, value){
    console.log('setFilter: ',key,' + ',value);
    const newState = { ...this.state };
    newState.filters[key] = value;
    this.setState(newState);
    this.listFilter();
  }

  listFilter(){
    console.log('listFilter');
    const restaurants = this.state.filteredList;
    const filter = this.state.filters;

    const filteredList = restaurants.filter(restaurant => {
      console.log("filteredList");
      for (let key in filter) {
        console.log('key: ', key)
        if(restaurant[key] === filter[key])
          return true
      }
      return false;
    });

    const newState = { ...this.state };
    newState.filteredList = filteredList;
    this.setState(newState);
  }

  pickTheWinner(){
    const restaurants = this.state.filteredList;
    if (restaurants.length === 1) {
      return restaurants[0];
    }
    let winner = restaurants[Math.floor(Math.random()*restaurants.length)]
    if (winner.name === this.state.winner) {
      winner = restaurants[Math.floor(Math.random()*restaurants.length)]
    }
    const newState = { ...this.state };
    newState.winner = winner.name;
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <Grid>
          <Col xs={6} md={4}>
            <Restaurants 
              restaurants={this.state.filteredList}
              editRestaurant={this.editRestaurant}
              deleteRestaurant={this.deleteRestaurant}
              setFilter={this.setFilter}
            />
          </Col>
          <Col xs={12} md={8}>
            <Lotto
              restaurants={this.state.restaurants}
              playLotto={this.pickTheWinner}
              winner={this.state.winner}
            />
          </Col>
        </Grid>
      </div>
    );
  }
}

export default App;
