import React, { Component } from 'react';
import { ListGroup,
				 ListGroupItem,
				 ButtonGroup,
				 Button,
				 Glyphicon } from 'react-bootstrap';
import './styles/Restaurants.css';

class Restaurants extends Component {
	render(){
		let restaurantList = [];
			this.props.filteredList 
			? restaurantList = this.props.filteredList 
			: restaurantList = this.props.restaurants;
		return (
			<div className="restaurantsDiv component_divs">
				<h2 id="restaurant_header" className="component_headers">Restaurants</h2>
				<ListGroup>
				{
					restaurantList.map(restaurant => (
					  <ListGroupItem key={restaurant.name} href={restaurant.url}>
					  	{restaurant.name}
					  	<div className="restaurantListBtnGrp">
							  <Glyphicon onClick={()=> {this.props.editRestaurant()}} glyph="pencil" />
							  <Glyphicon onClick={()=> {this.props.deleteRestaurant()}} glyph="remove" />
							</div>
					  </ListGroupItem>
					))
				}
				</ListGroup>
			</div>
		);
	}
}

export default Restaurants;