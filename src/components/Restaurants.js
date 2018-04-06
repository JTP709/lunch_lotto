import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';
import './Restaurants.css';

class Restaurants extends Component {
	render(){
		return (
			<div className="restaurantsDiv">
				<h1>Restaurants</h1>
				<ListGroup>
				{this.props.restaurants.map(restaurant => (
						  <ListGroupItem key={restaurant.name} href={restaurant.url}>
						  	{restaurant.name}
						  	<div className="restaurantListBtnGrp">
								  <Glyphicon onClick={()=> {this.editRestaurant}} className="glyphicon glyphicon-pencil" />
								  <Glyphicon onClick={()=> {this.deleteRestaurant}} className="glyphicon glyphicon-remove" />
								</div>
						  </ListGroupItem>
					)
				)}
				</ListGroup>
				<h1>Filter</h1>
				<h3>Type:</h3>
				<ButtonGroup>
				  <Button onClick={()=> {this.props.setFilter('type', 'Sushi')}}>Sushi</Button>
				  <Button onClick={ ()=> {this.props.setFilter('type', 'Za, brah')}}>Za, brah</Button>
				  <Button onClick={()=> {this.props.setFilter('type', 'Hamburgers')}}>Hamburgers</Button>
				</ButtonGroup>
				<h3>Price:</h3>
				<ButtonGroup>
				  <Button onClick={()=> {this.props.setFilter('price', '$')}}>$</Button>
				  <Button onClick={()=> {this.props.setFilter('price', '$$')}}>$$</Button>
				  <Button onClick={()=> {this.props.setFilter('price', '$$$')}}>$$$</Button>
				</ButtonGroup>
				<h3>Distance:</h3>
				<ButtonGroup>
				  <Button onClick={()=> {this.props.setFilter('distance', 'walking')}}>Walking</Button>
				  <Button onClick={()=> {this.props.setFilter('distance', 'driving')}}>Driving</Button>
				  <Button onClick={()=> {this.props.setFilter('distance', 'flying')}}>Flying</Button>
				</ButtonGroup>
			</div>
		);
	}
}

export default Restaurants;