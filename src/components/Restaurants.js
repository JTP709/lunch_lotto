import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';
import './Restaurants.css';

class Restaurants extends Component {
	render(){
		let restaurantList = [];
			this.props.filteredList 
			? restaurantList = this.props.filteredList 
			: restaurantList = this.props.restaurants;
		return (
			<div className="restaurantsDiv">
				<h1>Restaurants</h1>
				<ListGroup>
				{
					restaurantList.map(restaurant => (
				  <ListGroupItem key={restaurant.name} href={restaurant.url}>
				  	{restaurant.name}
				  	<div className="restaurantListBtnGrp">
						  <Glyphicon onClick={()=> {this.props.editRestaurant}} glyph="glyphicon glyphicon-pencil" />
						  <Glyphicon onClick={()=> {this.props.deleteRestaurant}} className="glyphicon glyphicon-remove" />
						</div>
				  </ListGroupItem>))
				}
				</ListGroup>
				<h2>Filters:</h2>
				<ul>
				{
					Object.keys(this.props.filters).map(key => (
						<li key={key}>{key}:
						<ul>
							{Object.keys(this.props.filters[key]).map(subkey => {
								if (this.props.filters[key][subkey]) {
									return (<li key={`${key}_${subkey}`}>
										{subkey}
									</li>)
								}
							})}
						</ul>
						</li>
					))
				}
				</ul>
					{
						Object.keys(this.props.filters).map(key => (
							<div key={`${key}_btn_group`}>
								<h3>{key}:</h3>
								<ButtonGroup>
									{
										Object.keys(this.props.filters[key]).map(subkey => (
											<Button key={`${subkey}_btn`} onClick={()=> { this.props.setFilter(key,subkey) }}>
												{subkey}
											</Button>
										))
									}
								</ButtonGroup>
							</div>
						))
					}
				<hr/>
				<Button onClick={()=>{this.props.resetFilter()}}>
					Reset Filter
				</Button>
			</div>
		);
	}
}

export default Restaurants;